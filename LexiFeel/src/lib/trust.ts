import type { Message, TrustState, TrustMetrics, TrustBand } from './types';

function clamp(x: number) {
  return Math.min(1, Math.max(0, x));
}

function computeMetrics(messages: Message[], previous: TrustMetrics | null): TrustMetrics {
  const userMessages = messages.filter(m => m.role === 'user');

  // Very simple heuristic for emotional disclosure
  const disclosureWords = ['i', 'me', 'my'];
  const disclosureCount = userMessages.reduce((acc, msg) => {
    const text = msg.text.toLowerCase();
    return acc + disclosureWords.filter(w => text.includes(` ${w} `)).length;
  }, 0);

  return {
    feedback: previous?.feedback ?? 0.5,
    avgMessageLength: clamp((userMessages.reduce((s, m) => s + m.text.length, 0) / (userMessages.length || 1)) / 300),
    sessionCount: previous?.sessionCount ?? 1,
    selfDisclosure: clamp(disclosureCount / 10),
    repairSuccess: previous?.repairSuccess ?? 0.5
  };
}

function computeTrustFactor(metrics: TrustMetrics, previousFactor = 0.3) {
  const raw =
    0.4 * (metrics.feedback ?? 0.5) +
    0.2 * metrics.avgMessageLength +
    0.15 * clamp(metrics.sessionCount / 10) +
    0.15 * metrics.selfDisclosure +
    0.1  * metrics.repairSuccess;

  return clamp(previousFactor * 0.7 + raw * 0.3);
}

function bandFromFactor(tf: number): TrustBand {
  if (tf < 0.2) return 'A_VERY_LOW';
  if (tf < 0.4) return 'B_CAUTIOUS';
  if (tf < 0.7) return 'C_MODERATE';
  return 'D_HIGH';
}

export function updateTrust(messages: Message[], previous: TrustState | null): TrustState {
  const metrics = computeMetrics(messages, previous?.metrics ?? null);
  const trustFactor = computeTrustFactor(metrics, previous?.trustFactor ?? 0.3);

  return {
    trustFactor,
    band: bandFromFactor(trustFactor),
    metrics
  };
}
