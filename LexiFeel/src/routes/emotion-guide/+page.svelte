<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'emotion-guide';
  
  const emotions = [
    { name: 'Happy', emoji: '😊', color: '#fef08a', textColor: '#854d0e' },
    { name: 'Sad', emoji: '😔', color: '#bfdbfe', textColor: '#1e3a8a' },
    { name: 'Anxious', emoji: '😰', color: '#e9d5ff', textColor: '#6b21a8' },
    { name: 'Angry', emoji: '😤', color: '#fecaca', textColor: '#991b1b' },
    { name: 'Calm', emoji: '😌', color: '#bbf7d0', textColor: '#14532d' },
    { name: 'Confused', emoji: '😕', color: '#fed7aa', textColor: '#92400e' },
    { name: 'Excited', emoji: '🤩', color: '#fbcfe8', textColor: '#831843' },
    { name: 'Tired', emoji: '😴', color: '#e0e7ff', textColor: '#3730a3' }
  ];
  
  function navigateToTab(tab: string) {
    currentTab = tab;
    if (tab === 'chat') goto('/chat');
    else if (tab === 'emotion-guide') goto('/emotion-guide');
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
  
  <div class="emotion-guide-container">
    <div class="guide-header">
      <Icon icon="mdi:book-open-variant" width="24" color="#7c3aed" />
      <h2>Emotion Guide</h2>
    </div>
    <p class="guide-subtitle">Tap any emotion to learn how it feels in your body</p>
    
    <div class="emotions-grid">
      {#each emotions as emotion}
        <button class="emotion-card" style="background: {emotion.color};">
          <span class="emotion-emoji">{emotion.emoji}</span>
          <span class="emotion-name" style="color: {emotion.textColor};">{emotion.name}</span>
        </button>
      {/each}
    </div>
  </div>
  
  <nav class="bottom-nav">
    <button class="nav-item {currentTab === 'chat' ? 'active' : ''}" on:click={() => navigateToTab('chat')}>
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
    overflow: hidden;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 12px);
    padding: clamp(14px, 3vw, 16px) clamp(16px, 4vw, 20px);
    background: white;
    border-bottom: 1px solid #f3f4f6;
    flex-shrink: 0;
  }
  
  .bot-avatar {
    width: clamp(45px, 10vw, 60px);
    height: clamp(45px, 10vw, 60px);
    border-radius: 50%;
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .bot-info {
    flex: 1;
    min-width: 0;
  }
  
  .bot-name {
    margin: 0;
    font-size: clamp(16px, 3.5vw, 20px);
    font-weight: 600;
    color: #1f2937;
  }
  
  .bot-status {
    margin: 2px 0 0 0;
    font-size: clamp(12px, 2.5vw, 14px);
    color: #a78bfa;
  }
  
  .emotion-guide-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: clamp(14px, 3vw, 20px);
    background: #fefefe;
  }
  
  .guide-header {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 10px);
    margin-bottom: clamp(6px, 1.5vw, 8px);
  }
  
  .guide-header h2 {
    margin: 0;
    font-size: clamp(20px, 4.5vw, 24px);
    font-weight: 600;
    color: #1f2937;
  }
  
  .guide-subtitle {
    margin: 0 0 clamp(14px, 3vw, 20px) 0;
    font-size: clamp(13px, 3vw, 16px);
    color: #a78bfa;
    text-align: center;
  }
  
  .emotions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(10px, 2.5vw, 16px);
  }
  
  .emotion-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 2vw, 12px);
    padding: clamp(20px, 5vw, 32px) clamp(14px, 3.5vw, 20px);
    border: none;
    border-radius: clamp(16px, 4vw, 20px);
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .emotion-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }
  
  .emotion-card:active {
    transform: translateY(0);
  }
  
  .emotion-emoji {
    font-size: clamp(42px, 10vw, 56px);
  }
  
  .emotion-name {
    font-size: clamp(15px, 3.5vw, 18px);
    font-weight: 600;
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: white;
    border-top: 1px solid #f3f4f6;
    padding: clamp(8px, 2vw, 12px) 0;
    flex-shrink: 0;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: clamp(5px, 1.5vw, 8px) clamp(6px, 1.5vw, 12px);
    transition: all 0.2s;
    border-radius: 12px;
    color: #9ca3af;
    min-width: 0;
    flex: 1;
    max-width: clamp(70px, 15vw, 90px);
  }
  
  .nav-item:hover {
    background: #faf5ff;
  }
  
  .nav-item.active {
    color: #7c3aed;
  }
  
  .nav-item.active .icon-wrapper {
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    border-radius: 14px;
    padding: 6px 12px;
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .nav-item:not(.active) .icon-wrapper {
    padding: 6px 0;
  }
  
  .nav-label {
    font-size: 11px;
    font-weight: 500;
    transition: color 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  
  .nav-item.active .nav-label {
    color: #7c3aed;
    font-weight: 600;
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 480px;
      margin: 0 auto;
    }
  }
</style>
