<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  import type { Message, TrustState } from '$lib/types';
  
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
      body: JSON.stringify({ messages, trustState })
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
  
  function navigateToTab(tab: string) {
    currentTab = tab;
    if (tab === 'emotion-guide') goto('/emotion-guide');
    else if (tab === 'journal') goto('/journal');
    else if (tab === 'insights') goto('/insights');
    else if (tab === 'settings') goto('/settings');
  }
</script>

<div class="chat-container">
  <header class="chat-header">
    <div class="bot-avatar">
      <Icon icon="mdi:heart" width="32" color="#7c3aed" />
    </div>
    <div class="bot-info">
      <h2 class="bot-name">Feelio</h2>
      <p class="bot-status">Always here to listen</p>
    </div>
  </header>
  
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
  
  <nav class="bottom-nav">
    <button class="nav-item {currentTab === 'chat' ? 'active' : ''}" on:click={() => currentTab = 'chat'}>
      <div class="icon-wrapper">
        <Icon icon="mdi:message-text-outline" width="28" />
      </div>
      <span class="nav-label">Chat</span>
    </button>
    <button class="nav-item {currentTab === 'emotion-guide' ? 'active' : ''}" on:click={() => navigateToTab('emotion-guide')}>
      <div class="icon-wrapper">
        <Icon icon="mdi:heart-outline" width="28" />
      </div>
      <span class="nav-label">Emotion Guide</span>
    </button>
    <button class="nav-item {currentTab === 'journal' ? 'active' : ''}" on:click={() => navigateToTab('journal')}>
      <div class="icon-wrapper">
        <Icon icon="mdi:book-outline" width="28" />
      </div>
      <span class="nav-label">Journal</span>
    </button>
    <button class="nav-item {currentTab === 'insights' ? 'active' : ''}" on:click={() => navigateToTab('insights')}>
      <div class="icon-wrapper">
        <Icon icon="mdi:chart-bar" width="28" />
      </div>
      <span class="nav-label">Insights</span>
    </button>
    <button class="nav-item {currentTab === 'settings' ? 'active' : ''}" on:click={() => navigateToTab('settings')}>
      <div class="icon-wrapper">
        <Icon icon="mdi:cog-outline" width="28" />
      </div>
      <span class="nav-label">Settings</span>
    </button>
  </nav>
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    background: white;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: white;
    border-bottom: 1px solid #f3f4f6;
  }
  
  .bot-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .bot-info {
    flex: 1;
  }
  
  .bot-name {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .bot-status {
    margin: 2px 0 0 0;
    font-size: 14px;
    color: #a78bfa;
  }
  
  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #fefefe;
  }
  
  .message {
    display: flex;
    margin-bottom: 16px;
  }
  
  .message.assistant {
    justify-content: flex-start;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message-content {
    max-width: 80%;
    padding: 16px 20px;
    border-radius: 24px;
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
    margin: 0 0 8px 0;
    line-height: 1.6;
    font-size: 15px;
  }
  
  .message-time {
    font-size: 12px;
    opacity: 0.7;
  }
  
  .reflect-section {
    padding: 16px 20px;
    background: white;
  }
  
  .reflect-button {
    width: 100%;
    padding: 14px;
    background: white;
    border: 2px solid #e9d5ff;
    border-radius: 50px;
    color: #7c3aed;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .reflect-button:hover {
    background: #faf5ff;
    border-color: #c4b5fd;
  }
  
  .input-section {
    padding: 16px 20px;
    background: white;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .input-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 2px solid #e9d5ff;
    border-radius: 50px;
    padding: 8px 20px;
  }
  
  .input-container input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 15px;
    padding: 8px;
    outline: none;
    color: #1f2937;
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
  }
  
  .icon-button:hover {
    color: #7c3aed;
    transform: scale(1.1);
  }
  
  .send-button {
    width: 56px;
    height: 56px;
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
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: white;
    border-top: 1px solid #f3f4f6;
    padding: 12px 0 16px;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    transition: all 0.2s;
    border-radius: 12px;
    color: #9ca3af;
    position: relative;
  }
  
  .nav-item:hover {
    background: #faf5ff;
  }
  
  .nav-item.active {
    color: #7c3aed;
  }
  
  .nav-item.active .icon-wrapper {
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    border-radius: 16px;
    padding: 8px 16px;
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .nav-item:not(.active) .icon-wrapper {
    padding: 8px 0;
  }
  
  .nav-label {
    font-size: 12px;
    font-weight: 500;
    transition: color 0.2s;
  }
  
  .nav-item.active .nav-label {
    color: #7c3aed;
    font-weight: 600;
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 480px;
      margin: 0 auto;
      height: 100vh;
    }
  }
</style>
