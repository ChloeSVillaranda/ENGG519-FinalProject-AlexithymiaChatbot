<script lang="ts">
  import Icon from '@iconify/svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import BottomNavigation from '$lib/components/BottomNavigation.svelte';
  import type { Message, TrustState } from '$lib/types';
  import { debugTrustOverride } from '$lib/stores/trustOverride';

  let inputText = '';
  let currentTab = 'chat';
  let trustState: TrustState | null = null;
  let messages: Message[] = [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Hi there! I'm here to help you explore and understand what you notice. What physical sensations are showing up right now?",
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    }
  ];

  async function sendMessage() {
    if (!inputText.trim()) return;

    // Add user's message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit" })
    };

    messages = [...messages, userMessage];
    inputText = '';

    // Call backend
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, trustState, debugTrustOverride: $debugTrustOverride })
    });

    if (!res.ok) {
      console.error("Backend error");
      return;
    }

    const data = await res.json();

    const botMessage: Message = data.message;
    trustState = data.trustState;

    // Add bot message
    messages = [...messages, botMessage];
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
</script>

<div class="chat-container">
  <BotHeader />

  {#if trustState}
    <div class="trust-debug">
      <strong>Trust Band:</strong> {trustState.band}<br>
      <strong>Trust Factor:</strong> {trustState.trustFactor.toFixed(3)}<br>

      <details>
        <summary>Metrics</summary>
        <div class="metric-line">Avg Length: {trustState.metrics.avgMessageLength.toFixed(1)}</div>
        <div class="metric-line">Self-disclosure: {trustState.metrics.selfDisclosure.toFixed(2)}</div>
        <div class="metric-line">Repair success: {trustState.metrics.repairSuccess.toFixed(2)}</div>
        <div class="metric-line">Sessions: {trustState.metrics.sessionCount}</div>
      </details>
    </div>
  {/if}
  
  <div class="messages-container">
    {#each messages as message}
      <div class="message {message.role}">
        <div class="message-content">
          <p>{message.text}</p>
          <span class="message-time">{message.time}</span>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="reflect-section">
    <button class="reflect-button">
      <Icon icon="mdi:sparkles" width="20" />
      Reflect on this conversation
    </button>
  </div>
  
  <div class="input-section">
    <div class="input-container">
      <input 
        type="text" 
        placeholder="Describe what you notice in your body..."
        bind:value={inputText}
        on:keypress={handleKeyPress}
      />
      <button class="icon-button">
        <Icon icon="mdi:emoticon-happy-outline" width="24" />
      </button>
      <button class="icon-button">
        <Icon icon="mdi:microphone" width="24" />
      </button>
    </div>
    <button class="send-button" on:click={sendMessage}>
      <Icon icon="mdi:send" width="24" color="white" />
    </button>
  </div>
  
  <BottomNavigation {currentTab} />
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    background: white;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .trust-debug {
    background: #f3e8ff;
    color: #5b21b6;
    border-left: 4px solid #a78bfa;
    padding: 12px 16px;
    margin: 0;
    font-size: 14px;
    opacity: 0.95;
    flex-shrink: 0;
  }

  .trust-debug summary {
    cursor: pointer;
    margin-top: 6px;
    font-weight: 600;
    color: #7c3aed;
  }

  .metric-line {
    padding-left: 10px;
    font-size: 13px;
    margin-top: 4px;
    color: #4c1d95;
  }
  
  .messages-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: clamp(14px, 3vw, 20px);
    background: #fefefe;
  }
  
  .message {
    display: flex;
    margin-bottom: clamp(12px, 2.5vw, 16px);
  }
  
  .message.assistant {
    justify-content: flex-start;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message-content {
    max-width: 80%;
    padding: clamp(12px, 3vw, 16px) clamp(16px, 3.5vw, 20px);
    border-radius: clamp(18px, 4vw, 24px);
  }
  
  .message.assistant .message-content {
    background: #f3e8ff;
    color: #5b21b6;
    border-bottom-left-radius: 6px;
  }
  
  .message.user .message-content {
    background: #8b5cf6;
    color: white;
    border-bottom-right-radius: 6px;
  }
  
  .message-content p {
    margin: 0 0 clamp(5px, 1.5vw, 8px) 0;
    line-height: 1.5;
    font-size: clamp(13px, 3vw, 15px);
  }
  
  .message-time {
    font-size: clamp(10px, 2.2vw, 12px);
    opacity: 0.7;
  }
  
  .reflect-section {
    padding: clamp(12px, 3vw, 16px) clamp(14px, 3.5vw, 20px);
    background: white;
    flex-shrink: 0;
  }
  
  .reflect-button {
    width: 100%;
    padding: clamp(10px, 2.5vw, 14px);
    background: white;
    border: 2px solid #e9d5ff;
    border-radius: 50px;
    color: #7c3aed;
    font-size: clamp(14px, 3vw, 16px);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(6px, 1.5vw, 10px);
  }
  
  .reflect-button:hover {
    background: #faf5ff;
    border-color: #c4b5fd;
  }
  
  .input-section {
    padding: clamp(12px, 3vw, 16px) clamp(14px, 3.5vw, 20px);
    background: white;
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 12px);
    flex-shrink: 0;
  }
  
  .input-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: clamp(5px, 1.5vw, 8px);
    background: white;
    border: 2px solid #e9d5ff;
    border-radius: 50px;
    padding: clamp(5px, 1.5vw, 8px) clamp(14px, 3vw, 20px);
    min-width: 0;
  }
  
  .input-container input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: clamp(13px, 3vw, 15px);
    padding: clamp(6px, 1.5vw, 8px);
    outline: none;
    color: #1f2937;
    min-width: 0;
  }
  
  .input-container input::placeholder {
    color: #9ca3af;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a78bfa;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .icon-button:hover {
    color: #7c3aed;
    transform: scale(1.1);
  }
  
  .send-button {
    width: clamp(44px, 10vw, 56px);
    height: clamp(44px, 10vw, 56px);
    border-radius: 50%;
    background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .send-button:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
