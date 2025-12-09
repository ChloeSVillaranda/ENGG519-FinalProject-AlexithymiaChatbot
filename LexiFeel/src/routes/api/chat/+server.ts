import type { RequestHandler } from "./$types";
import { GROQ_API_KEY } from "$env/static/private";
import type { Message, TrustState } from "$lib/types";
import { updateTrust } from "$lib/trust";

export const POST: RequestHandler = async ({ request }) => {
  console.log("KEY LOADED?", !!GROQ_API_KEY);

  const { messages, trustState, debugTrustOverride } = await request.json();

  // 1️⃣ NORMAL trust update
  let newTrust = updateTrust(messages, trustState);

  // 2️⃣ OVERRIDE: Force band + freeze trustFactor
  let effectiveTrust: TrustState = debugTrustOverride
    ? {
        ...newTrust,
        band: debugTrustOverride,
        trustFactor: 0, // irrelevant when overridden
      }
    : newTrust;

  // 3️⃣ Build system prompt with effective band
  const systemPrompt = buildSystemPrompt(effectiveTrust);

  const chatHistory = messages.map((m: Message) => ({
    role: m.role,
    content: m.text,
  }));

  const payload = {
    model: "llama-3.1-8b-instant",
    messages: [{ role: "system", content: systemPrompt }, ...chatHistory],
    temperature: 0.4,
  };

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("OPENAI ERROR:", errText);

    return new Response(
      JSON.stringify({
        error: true,
        details: errText,
      }),
      { status: 500 }
    );
  }

  const data = await res.json();
  const content =
    data.choices?.[0]?.message?.content ??
    "Sorry, I couldn’t think of what to say.";

  const botMessage: Message = {
    id: crypto.randomUUID(),
    role: "assistant",
    text: content,
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }),
  };

  const updatedMessages = [...messages, botMessage];

  // 4️⃣ Recompute trust ONLY if override is OFF
  const finalTrust = debugTrustOverride
    ? effectiveTrust // frozen
    : updateTrust(updatedMessages, newTrust); // dynamic

  return new Response(
    JSON.stringify({
      message: botMessage,
      trustState: finalTrust,
    }),
    { status: 200 }
  );
};

function buildSystemPrompt(trust: TrustState) {
  const base = `
You are an alexithymia-sensitive chatbot.
Use clear, concrete, literal language.
Avoid metaphors.
Never ask "how do you feel?" directly.
Use bodily sensations and situation-based questions first.
Respect autonomy.
Avoid clinical or diagnostic language.
`;

  const bands = {
    A_VERY_LOW: `
Keep responses short, simple, and low pressure.
Avoid emotional prompts.
Focus on clarifying physical or situational cues.
`,
    B_CAUTIOUS: `
Ask about bodily sensations first.
Offer emotion words only as optional lists.
Explain why you're asking questions.
`,
    C_MODERATE: `
Provide gentle emotional scaffolding.
Offer short psychoeducational comments.
`,
    D_HIGH: `
You may summarize patterns across messages.
Use multi-step guidance.
Still avoid emotional assumptions.
`,
  };

  return base + bands[trust.band];
}
