<script lang="ts">
  import { goto } from '$app/navigation';
  
  let messages = [
    {
      id: 1,
      type: 'bot',
      text: "Hi there! I'm here to help you explore and understand your emotions. Let's start with what you notice in your body. How do you physically feel right now?",
      time: '10:03 PM'
    }
  ];
  
  let inputText = '';
  let currentTab = 'chat';
  
  function sendMessage() {
    if (inputText.trim()) {
      messages = [...messages, {
        id: messages.length + 1,
        type: 'user',
        text: inputText,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      }];
      inputText = '';
      
      setTimeout(() => {
        messages = [...messages, {
          id: messages.length + 1,
          type: 'bot',
          text: "Thank you for sharing. That's a good start in recognizing what's happening in your body. Can you tell me more about what emotions you might be feeling?",
          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        }];
      }, 1000);
    }
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
</script>

<div class="chat-container">
  <header class="chat-header">
    <div class="header-content">
      <div class="bot-avatar">💜</div>
      <div class="bot-info">
        <h2 class="bot-name">Feelio</h2>
        <p class="bot-status">Always here to listen</p>
      </div>
    </div>
  </header>
  
  <div class="messages-container">
    {#each messages as message}
      <div class="message {message.type}">
        <div class="message-content">
          <p>{message.text}</p>
          <span class="message-time">{message.time}</span>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="reflect-section">
    <button class="reflect-button">
      <span class="sparkle-icon">✨</span>
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
      <button class="emoji-button">😊</button>
      <button class="voice-button">🎤</button>
      <button class="send-button" on:click={sendMessage}>
        <span>➤</span>
      </button>
    </div>
  </div>
  
  <nav class="bottom-nav">
    <button class="nav-item {currentTab === 'chat' ? 'active' : ''}" on:click={() => currentTab = 'chat'}>
      <span class="nav-icon">💬</span>
      <span class="nav-label">Chat</span>
    </button>
    <button class="nav-item" on:click={() => currentTab = 'emotion-guide'}>
      <span class="nav-icon">💗</span>
      <span class="nav-label">Emotion Guide</span>
    </button>
    <button class="nav-item" on:click={() => currentTab = 'journal'}>
      <span class="nav-icon">📖</span>
      <span class="nav-label">Journal</span>
    </button>
    <button class="nav-item" on:click={() => currentTab = 'insights'}>
      <span class="nav-icon">📊</span>
      <span class="nav-label">Insights</span>
    </button>
    <button class="nav-item" on:click={() => currentTab = 'settings'}>
      <span class="nav-icon">⚙️</span>
      <span class="nav-label">Settings</span>
    </button>
  </nav>
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    background: white;
  }
  
  .chat-header {
    background: white;
    padding: 15px 20px;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .bot-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  
  .bot-info {
    flex: 1;
  }
  
  .bot-name {
    margin: 0;
    font-size: 18px;
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
    background: #fafafa;
  }
  
  .message {
    display: flex;
    margin-bottom: 20px;
  }
  
  .message.bot {
    justify-content: flex-start;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message-content {
    max-width: 70%;
    padding: 15px 20px;
    border-radius: 20px;
    position: relative;
  }
  
  .message.bot .message-content {
    background: #e9d5ff;
    color: #1f2937;
    border-bottom-left-radius: 5px;
  }
  
  .message.user .message-content {
    background: #8b5cf6;
    color: white;
    border-bottom-right-radius: 5px;
  }
  
  .message-content p {
    margin: 0 0 8px 0;
    line-height: 1.5;
  }
  
  .message-time {
    font-size: 11px;
    opacity: 0.7;
  }
  
  .reflect-section {
    padding: 15px 20px;
    background: white;
    border-top: 1px solid #e5e7eb;
  }
  
  .reflect-button {
    width: 100%;
    padding: 12px;
    background: white;
    border: 2px solid #a78bfa;
    border-radius: 25px;
    color: #8b5cf6;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  .reflect-button:hover {
    background: #f5f3ff;
  }
  
  .sparkle-icon {
    font-size: 18px;
  }
  
  .input-section {
    padding: 15px 20px 20px;
    background: white;
    border-top: 1px solid #e5e7eb;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f3f4f6;
    border-radius: 25px;
    padding: 8px 15px;
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
  
  .emoji-button, .voice-button {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s;
  }
  
  .emoji-button:hover, .voice-button:hover {
    transform: scale(1.1);
  }
  
  .send-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  
  .send-button:hover {
    transform: scale(1.05);
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: white;
    border-top: 1px solid #e5e7eb;
    padding: 10px 0;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    transition: all 0.2s;
    border-radius: 12px;
    min-width: 70px;
  }
  
  .nav-item:hover {
    background: #f5f3ff;
  }
  
  .nav-item.active {
    color: #8b5cf6;
  }
  
  .nav-item.active .nav-icon {
    transform: scale(1.1);
  }
  
  .nav-icon {
    font-size: 24px;
    transition: transform 0.2s;
  }
  
  .nav-label {
    font-size: 12px;
    font-weight: 500;
    color: #6b7280;
  }
  
  .nav-item.active .nav-label {
    color: #8b5cf6;
  }
  
  @media (max-width: 768px) {
    .message-content {
      max-width: 85%;
    }
    
    .nav-label {
      font-size: 11px;
    }
    
    .nav-item {
      min-width: 60px;
      padding: 8px 5px;
    }
    
    .nav-icon {
      font-size: 22px;
    }
  }
  
  @media (min-width: 769px) {
    .chat-container {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }
  }
</style>
