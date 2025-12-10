<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  
  export let currentTab: string = 'chat';
  
  function navigateToTab(tab: string) {
    if (tab === 'chat') goto('/chat');
    else if (tab === 'emotion-guide') goto('/emotion-guide');
    else if (tab === 'journal') goto('/journal');
    else if (tab === 'insights') goto('/insights');
    else if (tab === 'settings') goto('/settings');
  }
</script>

<nav class="bottom-nav">
  <button class="nav-item {currentTab === 'chat' ? 'active' : ''}" on:click={() => navigateToTab('chat')}>
    <div class="icon-wrapper">
      <Icon icon="mdi:message-text-outline" width={24} />
    </div>
    <span class="nav-label">Chat</span>
  </button>
  <button class="nav-item {currentTab === 'emotion-guide' ? 'active' : ''}" on:click={() => navigateToTab('emotion-guide')}>
    <div class="icon-wrapper">
      <Icon icon="mdi:heart-outline" width={24} />
    </div>
    <span class="nav-label multi-line">Emotions</span>
  </button>
  <button class="nav-item {currentTab === 'journal' ? 'active' : ''}" on:click={() => navigateToTab('journal')}>
    <div class="icon-wrapper">
      <Icon icon="mdi:book-outline" width={24} />
    </div>
    <span class="nav-label">Journal</span>
  </button>
  <button class="nav-item {currentTab === 'insights' ? 'active' : ''}" on:click={() => navigateToTab('insights')}>
    <div class="icon-wrapper">
      <Icon icon="mdi:chart-bar" width={24} />
    </div>
    <span class="nav-label">Insights</span>
  </button>
  <button class="nav-item {currentTab === 'settings' ? 'active' : ''}" on:click={() => navigateToTab('settings')}>
    <div class="icon-wrapper">
      <Icon icon="mdi:cog-outline" width={24} />
    </div>
    <span class="nav-label">Settings</span>
  </button>
</nav>

<style>
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-top: 1px solid #f3f4f6;
    padding: 8px 4px 10px;
    flex-shrink: 0;
    width: 100%;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 6px 8px;
    transition: all 0.2s;
    border-radius: 12px;
    color: #9ca3af;
    flex: 1;
    max-width: 80px;
    min-width: 0;
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
    padding: 6px 10px;
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-height: 32px;
  }
  
  .nav-item:not(.active) .icon-wrapper {
    padding: 6px 0;
  }
  
  .nav-label {
    font-size: 10px;
    font-weight: 500;
    transition: color 0.2s;
    white-space: normal;
    width: 100%;
    text-align: center;
    line-height: 1.2;
  }
  
  .nav-label.multi-line {
    white-space: normal;
  }
  
  .nav-item.active .nav-label {
    color: #7c3aed;
    font-weight: 600;
  }
  
  @media (min-width: 769px) {
    .bottom-nav {
      padding: 10px 8px 12px;
    }
    
    .nav-item {
      max-width: 100px;
      padding: 8px 10px;
    }
    
    .nav-label {
      font-size: 11px;
    }
  }
</style>
