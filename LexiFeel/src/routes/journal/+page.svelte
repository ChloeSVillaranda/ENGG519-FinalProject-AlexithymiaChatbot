<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'journal';
  
  const weekMoods = [
    { day: 'Sun', color: '#bbf7d0' },
    { day: 'Mon', color: '#fef08a' },
    { day: 'Tue', color: '#e9d5ff' },
    { day: 'Wed', color: '#bfdbfe' },
    { day: 'Thu', color: '#fef08a' }
  ];
  
  let todayEvents = '';
  let bodyFelt = '';
  let notableMoments = '';
  
  function navigateToTab(tab: string) {
    currentTab = tab;
    if (tab === 'chat') goto('/chat');
    else if (tab === 'emotion-guide') goto('/emotion-guide');
    else if (tab === 'journal') goto('/journal');
    else if (tab === 'insights') goto('/insights');
    else if (tab === 'settings') goto('/settings');
  }
  
  function saveReflection() {
    console.log('Saving reflection:', { todayEvents, bodyFelt, notableMoments });
    // Add save logic here
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
  
  <div class="journal-container">
    <div class="journal-header">
      <div class="header-left">
        <h2 class="journal-title">Daily Reflection</h2>
        <p class="journal-date">Friday, October 24, 2025</p>
      </div>
      <button class="download-button">
        <Icon icon="mdi:download" width="24" color="#a78bfa" />
      </button>
    </div>
    
    <div class="mood-tracker-card">
      <div class="card-header">
        <Icon icon="mdi:calendar-blank" width="24" color="#7c3aed" />
        <h3>This Week's Moods</h3>
      </div>
      <div class="mood-dots">
        {#each weekMoods as mood}
          <div class="mood-item">
            <div class="mood-dot" style="background: {mood.color};"></div>
            <span class="mood-day">{mood.day}</span>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="reflection-card">
      <h3 class="card-title">What happened today...</h3>
      <textarea
        class="reflection-textarea"
        placeholder="Describe events, interactions, or situations from your day..."
        bind:value={todayEvents}
      ></textarea>
      <button class="ai-suggestions-button">
        <Icon icon="mdi:creation" width="20" />
        AI suggestions
      </button>
    </div>
    
    <div class="reflection-card">
      <h3 class="card-title">How my body felt...</h3>
      <textarea
        class="reflection-textarea small"
        placeholder="Describe physical sensations (tight chest, heavy limbs, racing heart, tense shoulders, etc.)..."
        bind:value={bodyFelt}
      ></textarea>
    </div>
    
    <div class="reflection-card">
      <h3 class="card-title">Notable Moments ☀️</h3>
      <textarea
        class="reflection-textarea small"
        placeholder="What stood out to you today? Any interactions or moments you keep thinking about..."
        bind:value={notableMoments}
      ></textarea>
    </div>
    
    <button class="save-button" on:click={saveReflection}>
      Save Reflection
    </button>
    
    <p class="quote">
      "Every experience and sensation is a clue to understanding your emotional world."
    </p>
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
  
  .journal-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #fefefe;
  }
  
  .journal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  
  .header-left {
    flex: 1;
  }
  
  .journal-title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .journal-date {
    margin: 4px 0 0 0;
    font-size: 16px;
    color: #a78bfa;
  }
  
  .download-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  
  .download-button:hover {
    transform: scale(1.1);
  }
  
  .mood-tracker-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .mood-dots {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  
  .mood-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .mood-dot {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    transition: transform 0.2s;
  }
  
  .mood-dot:hover {
    transform: scale(1.05);
  }
  
  .mood-day {
    font-size: 14px;
    font-weight: 500;
    color: #a78bfa;
  }
  
  .reflection-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .card-title {
    margin: 0 0 16px 0;
    font-size: 18px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .reflection-textarea {
    width: 100%;
    min-height: 140px;
    padding: 16px;
    border: 1px solid #e9d5ff;
    border-radius: 16px;
    font-size: 15px;
    font-family: inherit;
    resize: vertical;
    outline: none;
    color: #1f2937;
    background: #fefefe;
    box-sizing: border-box;
  }
  
  .reflection-textarea.small {
    min-height: 100px;
  }
  
  .reflection-textarea::placeholder {
    color: #c4b5fd;
  }
  
  .reflection-textarea:focus {
    border-color: #a78bfa;
  }
  
  .ai-suggestions-button {
    margin-top: 12px;
    padding: 10px 20px;
    background: transparent;
    border: none;
    color: #a78bfa;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
  }
  
  .ai-suggestions-button:hover {
    color: #7c3aed;
  }
  
  .save-button {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    border: none;
    border-radius: 50px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    margin-bottom: 16px;
  }
  
  .save-button:hover {
    transform: translateY(-2px);
  }
  
  .quote {
    text-align: center;
    font-size: 14px;
    font-style: italic;
    color: #c4b5fd;
    margin: 0 0 20px 0;
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
