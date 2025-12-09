<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  
  export let currentTab: string = 'chat';
  
  const navItems = [
    { id: 'chat', icon: 'mdi:message-text-outline', label: 'Chat', path: '/chat' },
    { id: 'emotion-guide', icon: 'mdi:heart-outline', label: 'Emotion Guide', path: '/emotion-guide' },
    { id: 'journal', icon: 'mdi:book-outline', label: 'Journal', path: '/journal' },
    { id: 'insights', icon: 'mdi:chart-bar', label: 'Insights', path: '/insights' },
    { id: 'settings', icon: 'mdi:cog-outline', label: 'Settings', path: '/settings' }
  ];
  
  function navigateToTab(tab: { id: string; path: string }) {
    currentTab = tab.id;
    goto(tab.path);
  }
</script>

<nav class="bottom-nav" aria-label="Main navigation">
  {#each navItems as item}
    <button 
      class="nav-item {currentTab === item.id ? 'active' : ''}"
      on:click={() => navigateToTab(item)}
      aria-label="{item.label}"
      aria-current={currentTab === item.id ? 'page' : undefined}
    >
      <div class="icon-wrapper" aria-hidden="true">
        <Icon icon={item.icon} width="28" />
      </div>
      <span class="nav-label">{item.label}</span>
    </button>
  {/each}
</nav>

<style>
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
</style>
