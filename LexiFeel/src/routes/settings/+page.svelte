<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'settings';
  
  let userName = '';
  let pronouns = '';
  let selectedTone = 'empathetic';
  let dailyCheckIns = true;
  let weeklyInsights = true;
  let darkMode = false;
  let voiceMode = false;
  let textSize = 'medium';
  let readingMode = false;
  
  function navigateToTab(tab: string) {
    currentTab = tab;
    if (tab === 'chat') goto('/chat');
    else if (tab === 'emotion-guide') goto('/emotion-guide');
    else if (tab === 'journal') goto('/journal');
    else if (tab === 'insights') goto('/insights');
    else if (tab === 'settings') goto('/settings');
  }
  
  function saveChanges() {
    console.log('Saving settings:', { userName, pronouns, selectedTone, dailyCheckIns, weeklyInsights, darkMode, voiceMode, textSize, readingMode });
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
  
  <div class="settings-container">
    <div class="settings-header">
      <h2 class="settings-title">Settings</h2>
      <p class="settings-subtitle">Customize your Feelio experience</p>
    </div>
    
    <!-- Profile Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:account-outline" width="24" color="#7c3aed" />
        <h3>Profile</h3>
      </div>
      
      <div class="input-group">
        <label class="input-label">Name</label>
        <input type="text" class="text-input" placeholder="Your name" bind:value={userName} />
      </div>
      
      <div class="input-group">
        <label class="input-label">Pronouns</label>
        <input type="text" class="text-input" placeholder="e.g., they/them, she/her, he/him" bind:value={pronouns} />
      </div>
    </div>
    
    <!-- Feelio's Tone Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:volume-high" width="24" color="#7c3aed" />
        <h3>Feelio's Tone</h3>
      </div>
      
      <div class="tone-options">
        <label class="tone-option {selectedTone === 'empathetic' ? 'selected' : ''}">
          <input type="radio" name="tone" value="empathetic" bind:group={selectedTone} />
          <div class="tone-content">
            <div class="tone-indicator"></div>
            <div class="tone-text">
              <span class="tone-label">Empathetic</span>
              <span class="tone-description">Warm, understanding, and gentle</span>
            </div>
          </div>
        </label>
        
        <label class="tone-option {selectedTone === 'neutral' ? 'selected' : ''}">
          <input type="radio" name="tone" value="neutral" bind:group={selectedTone} />
          <div class="tone-content">
            <div class="tone-indicator"></div>
            <div class="tone-text">
              <span class="tone-label">Neutral</span>
              <span class="tone-description">Balanced and objective</span>
            </div>
          </div>
        </label>
      </div>
    </div>
    
    <!-- Notifications Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:bell-outline" width="24" color="#7c3aed" />
        <h3>Notifications</h3>
      </div>
      
      <div class="toggle-group">
        <div class="toggle-item">
          <div class="toggle-info">
            <span class="toggle-label">Daily Check-ins</span>
            <span class="toggle-description">Remind me to reflect daily</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" bind:checked={dailyCheckIns} />
            <span class="slider"></span>
          </label>
        </div>
        
        <div class="toggle-item">
          <div class="toggle-info">
            <span class="toggle-label">Weekly Insights</span>
            <span class="toggle-description">Summary of my emotional progress</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" bind:checked={weeklyInsights} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Appearance Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:moon-waning-crescent" width="24" color="#7c3aed" />
        <h3>Appearance</h3>
      </div>
      
      <div class="toggle-group">
        <div class="toggle-item">
          <div class="toggle-info">
            <span class="toggle-label">Dark Mode</span>
            <span class="toggle-description">Deep purple theme for night</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" bind:checked={darkMode} />
            <span class="slider"></span>
          </label>
        </div>
        
        <div class="toggle-item">
          <div class="toggle-info">
            <span class="toggle-label">Voice Mode</span>
            <span class="toggle-description">Feelio responds with voice</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" bind:checked={voiceMode} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Accessibility Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:text-box-outline" width="24" color="#7c3aed" />
        <h3>Accessibility</h3>
      </div>
      
      <button class="setting-button">
        <span class="button-label">Text Size: Medium</span>
        <Icon icon="mdi:chevron-right" width="24" color="#a78bfa" />
      </button>
      
      <button class="setting-button">
        <span class="button-label">Reading Mode</span>
        <Icon icon="mdi:chevron-right" width="24" color="#a78bfa" />
      </button>
    </div>
    
    <!-- Privacy & Data Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:shield-outline" width="24" color="#7c3aed" />
        <h3>Privacy & Data</h3>
      </div>
      
      <button class="setting-button">
        <span class="button-label">Export My Data</span>
        <Icon icon="mdi:chevron-right" width="24" color="#a78bfa" />
      </button>
      
      <button class="setting-button">
        <span class="button-label">Privacy Policy</span>
        <Icon icon="mdi:chevron-right" width="24" color="#a78bfa" />
      </button>
      
      <p class="privacy-note">
        All conversations are stored locally on your device and encrypted. Feelio never shares your personal data.
      </p>
    </div>
    
    <button class="save-button" on:click={saveChanges}>
      Save Changes
    </button>
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
  
  .settings-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #fefefe;
  }
  
  .settings-header {
    margin-bottom: 24px;
  }
  
  .settings-title {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .settings-subtitle {
    margin: 4px 0 0 0;
    font-size: 16px;
    color: #a78bfa;
  }
  
  .settings-card {
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
    margin-bottom: 20px;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .input-group {
    margin-bottom: 16px;
  }
  
  .input-group:last-child {
    margin-bottom: 0;
  }
  
  .input-label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: #7c3aed;
    margin-bottom: 8px;
  }
  
  .text-input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e9d5ff;
    border-radius: 16px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    color: #1f2937;
    background: #fefefe;
    box-sizing: border-box;
  }
  
  .text-input::placeholder {
    color: #c4b5fd;
  }
  
  .text-input:focus {
    border-color: #a78bfa;
  }
  
  .tone-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .tone-option {
    position: relative;
    display: block;
    cursor: pointer;
  }
  
  .tone-option input[type="radio"] {
    position: absolute;
    opacity: 0;
  }
  
  .tone-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border: 2px solid #f3f4f6;
    border-radius: 16px;
    transition: all 0.2s;
  }
  
  .tone-option.selected .tone-content {
    border-color: #a78bfa;
    background: #faf5ff;
  }
  
  .tone-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #e9d5ff;
    background: white;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .tone-option.selected .tone-indicator {
    border-color: #7c3aed;
    background: #7c3aed;
    box-shadow: inset 0 0 0 4px white;
  }
  
  .tone-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .tone-label {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .tone-description {
    font-size: 14px;
    color: #a78bfa;
  }
  
  .toggle-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  
  .toggle-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }
  
  .toggle-label {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .toggle-description {
    font-size: 14px;
    color: #a78bfa;
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
    flex-shrink: 0;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e5e7eb;
    transition: 0.3s;
    border-radius: 28px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  }
  
  input:checked + .slider:before {
    transform: translateX(24px);
  }
  
  .setting-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: white;
    border: 1px solid #e9d5ff;
    border-radius: 16px;
    cursor: pointer;
    margin-bottom: 12px;
    transition: all 0.2s;
  }
  
  .setting-button:last-of-type {
    margin-bottom: 0;
  }
  
  .setting-button:hover {
    background: #faf5ff;
    border-color: #c4b5fd;
  }
  
  .button-label {
    font-size: 15px;
    font-weight: 600;
    color: #7c3aed;
  }
  
  .privacy-note {
    margin: 16px 0 0 0;
    font-size: 13px;
    line-height: 1.5;
    color: #a78bfa;
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
    margin-bottom: 20px;
  }
  
  .save-button:hover {
    transform: translateY(-2px);
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
