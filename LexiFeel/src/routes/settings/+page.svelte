<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import SectionCard from '$lib/components/SectionCard.svelte';
  import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
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
  
  function saveChanges() {
    console.log('Saving settings:', { userName, pronouns, selectedTone, dailyCheckIns, weeklyInsights, darkMode, voiceMode, textSize, readingMode });
    // Add save logic here
  }
</script>

<PageContainer>
  <BotHeader />
  
  <div class="settings-container" role="main">
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
  
  <TabNavigation {currentTab} />
</PageContainer>

<style>
  .settings-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-5);
    background: var(--color-neutral-50);
  }
  
  .settings-header {
    margin-bottom: var(--spacing-6);
  }
  
  .settings-title {
    margin: 0;
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .settings-subtitle {
    margin: var(--spacing-1) 0 0 0;
    font-size: var(--font-size-md);
    color: var(--color-primary-500);
  }
  
  .settings-card {
    background: white;
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-lg);
    padding: var(--spacing-5);
    margin-bottom: var(--spacing-5);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-5);
  }
  
  .card-header h3 {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
  }
  
  .input-group {
    margin-bottom: var(--spacing-4);
  }
  
  .input-group:last-child {
    margin-bottom: 0;
  }
  
  .input-label {
    display: block;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-700);
    margin-bottom: var(--spacing-2);
  }
  
  .text-input {
    width: 100%;
    padding: var(--spacing-3) var(--spacing-4);
    border: 1px solid var(--color-primary-200);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-family: inherit;
    outline: none;
    color: var(--color-neutral-800);
    background: var(--color-neutral-50);
    box-sizing: border-box;
  }
  
  .text-input::placeholder {
    color: var(--color-primary-400);
  }
  
  .text-input:focus {
    border-color: var(--color-primary-500);
  }
  
  .tone-options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
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
    gap: var(--spacing-3);
    padding: var(--spacing-4);
    border: 2px solid var(--color-neutral-200);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .tone-option.selected .tone-content {
    border-color: var(--color-primary-500);
    background: var(--color-primary-50);
  }
  
  .tone-indicator {
    width: 20px;
    height: 20px;
    border-radius: var(--radius-circle);
    border: 2px solid var(--color-primary-200);
    background: white;
    transition: all var(--transition-base);
    flex-shrink: 0;
  }
  
  .tone-option.selected .tone-indicator {
    border-color: var(--color-primary-700);
    background: var(--color-primary-700);
    box-shadow: inset 0 0 0 4px white;
  }
  
  .tone-text {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }
  
  .tone-label {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
  }
  
  .tone-description {
    font-size: var(--font-size-sm);
    color: var(--color-primary-500);
  }
  
  .toggle-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .setting-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-4);
    background: white;
    border: 1px solid var(--color-primary-200);
    border-radius: var(--radius-md);
    cursor: pointer;
    margin-bottom: var(--spacing-3);
    transition: all var(--transition-base);
  }
  
  .setting-button:last-of-type {
    margin-bottom: 0;
  }
  
  .setting-button:hover {
    background: var(--color-primary-50);
    border-color: var(--color-primary-400);
  }
  
  .button-label {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-700);
  }
  
  .privacy-note {
    margin: var(--spacing-4) 0 0 0;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
    color: var(--color-primary-500);
  }
  
  .save-button {
    width: 100%;
    padding: var(--spacing-4);
    background: var(--gradient-primary);
    border: none;
    border-radius: var(--radius-full);
    color: white;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: transform var(--transition-base);
    margin-bottom: var(--spacing-5);
  }
  
  .save-button:hover {
    transform: translateY(-2px);
  }
</style>
