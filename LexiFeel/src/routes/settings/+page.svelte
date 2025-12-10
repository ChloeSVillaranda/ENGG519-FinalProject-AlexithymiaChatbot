<script lang="ts">
  import BotHeader from '$lib/components/BotHeader.svelte';
  import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
  import BottomNavigation from '$lib/components/BottomNavigation.svelte';
  import Icon from '@iconify/svelte';
  import { debugTrustOverride } from '$lib/stores/trustOverride';

  let currentTab = 'settings';
  let selectedOverride: string | null = null;

  // Existing settings fields (kept exactly as you had them)
  let userName = '';
  let pronouns = '';
  let selectedTone = 'empathetic';
  let dailyCheckIns = true;
  let weeklyInsights = true;
  let darkMode = false;
  let voiceMode = false;
  let textSize = 'medium';
  let readingMode = false;
  
  function saveChanges() {
    console.log('Saving settings:', { 
      userName, 
      pronouns, 
      selectedTone, 
      dailyCheckIns, 
      weeklyInsights, 
      darkMode, 
      voiceMode, 
      textSize, 
      readingMode 
    });
  }

  /** Sync the override to the store anytime the dropdown changes */
  $: debugTrustOverride.set(selectedOverride);
</script>

<div class="chat-container">
  <BotHeader />
  
  <div class="settings-container" role="main">
    <div class="settings-header">
      <h2 class="settings-title">Settings</h2>
      <p class="settings-subtitle">Customize your Feelio experience</p>
    </div>
    
    <!-- Trust Override (for testing) -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:tune" width="24" color="#7c3aed" />
        <h3>Trust Band Override (Testing Only)</h3>
      </div>

      <select bind:value={selectedOverride} class="text-input" style="margin-top: 10px;">
        <option value={null}>No override (normal behavior)</option>
        <option value="A_VERY_LOW">A — Very Low</option>
        <option value="B_CAUTIOUS">B — Cautious</option>
        <option value="C_MODERATE">C — Moderate</option>
        <option value="D_HIGH">D — High</option>
      </select>

      <p style="font-size: 12px; color: #999; margin-top: 8px;">
        Forces the chatbot into a specific trust band for research testing.
      </p>
    </div>

    <!-- Profile Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:account-outline" width="24" color="#7c3aed" />
        <h3>Profile</h3>
      </div>
      
      <div class="input-group">
        <label class="input-label" for="user-name">Name</label>
        <input type="text" id="user-name" class="text-input" placeholder="Your name" bind:value={userName} />
      </div>
      
      <div class="input-group">
        <label class="input-label" for="user-pronouns">Pronouns</label>
        <input type="text" id="user-pronouns" class="text-input" placeholder="e.g., they/them, she/her, he/him" bind:value={pronouns} />
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
        <ToggleSwitch 
          label="Daily Check-ins"
          description="Remind me to reflect daily"
          bind:checked={dailyCheckIns}
          id="daily-checkins"
        />
        
        <ToggleSwitch 
          label="Weekly Insights"
          description="Summary of my emotional progress"
          bind:checked={weeklyInsights}
          id="weekly-insights"
        />
      </div>
    </div>
    
    <!-- Appearance Section -->
    <div class="settings-card">
      <div class="card-header">
        <Icon icon="mdi:moon-waning-crescent" width="24" color="#7c3aed" />
        <h3>Appearance</h3>
      </div>
      
      <div class="toggle-group">
        <ToggleSwitch 
          label="Dark Mode"
          description="Deep purple theme for night"
          bind:checked={darkMode}
          id="dark-mode"
        />
        
        <ToggleSwitch 
          label="Voice Mode"
          description="Feelio responds with voice"
          bind:checked={voiceMode}
          id="voice-mode"
        />
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
  
  .chat-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: white;
    border-bottom: 1px solid #f3f4f6;
    flex-shrink: 0;
  }
  
  .bot-avatar {
    width: 50px;
    height: 50px;
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
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .bot-status {
    margin: 2px 0 0 0;
    font-size: 13px;
    color: #a78bfa;
  }
  
  .settings-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    background: #fefefe;
  }
  
  .settings-header {
    margin-bottom: 20px;
  }
  
  .settings-title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .settings-subtitle {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #a78bfa;
  }
  
  .settings-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 18px;
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .input-group {
    margin-bottom: 14px;
  }
  
  .input-group:last-child {
    margin-bottom: 0;
  }
  
  .input-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #7c3aed;
    margin-bottom: 6px;
  }
  
  .text-input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #e9d5ff;
    border-radius: 14px;
    font-size: 14px;
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
    gap: 10px;
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
    gap: 10px;
    padding: 14px;
    border: 2px solid #f3f4f6;
    border-radius: 14px;
    transition: all 0.2s;
  }
  
  .tone-option.selected .tone-content {
    border-color: #a78bfa;
    background: #faf5ff;
  }
  
  .tone-indicator {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #e9d5ff;
    background: white;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .tone-option.selected .tone-indicator {
    border-color: #7c3aed;
    background: #7c3aed;
    box-shadow: inset 0 0 0 3px white;
  }
  
  .tone-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  
  .tone-label {
    font-size: 15px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .tone-description {
    font-size: 13px;
    color: #a78bfa;
  }
  
  .toggle-group {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  
  .setting-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    background: white;
    border: 1px solid #e9d5ff;
    border-radius: 14px;
    cursor: pointer;
    margin-bottom: 10px;
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
    font-size: 14px;
    font-weight: 600;
    color: #7c3aed;
  }
  
  .privacy-note {
    margin: 12px 0 0 0;
    font-size: 12px;
    line-height: 1.5;
    color: #a78bfa;
  }
  
  .save-button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    border: none;
    border-radius: 50px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    margin-bottom: 16px;
  }
  
  .save-button:hover {
    transform: translateY(-2px);
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
      height: 100vh;
    }
    
    .bot-avatar {
      width: 60px;
      height: 60px;
    }
    
    .bot-name {
      font-size: 20px;
    }
    
    .bot-status {
      font-size: 14px;
    }
    
    .settings-container {
      padding: 20px;
    }
    
    .settings-title {
      font-size: 28px;
    }
    
    .settings-subtitle {
      font-size: 16px;
    }
    
    .settings-card {
      padding: 20px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    
    .card-header h3 {
      font-size: 18px;
    }
    
    .input-label {
      font-size: 15px;
    }
    
    .text-input {
      padding: 14px 16px;
      font-size: 15px;
      border-radius: 16px;
    }
    
    .tone-content {
      padding: 16px;
      border-radius: 16px;
    }
    
    .tone-label {
      font-size: 16px;
    }
    
    .tone-description {
      font-size: 14px;
    }
    
    .setting-button {
      padding: 16px;
      border-radius: 16px;
    }
    
    .button-label {
      font-size: 15px;
    }
    
    .privacy-note {
      font-size: 13px;
    }
    
    .save-button {
      padding: 16px;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
</style>
