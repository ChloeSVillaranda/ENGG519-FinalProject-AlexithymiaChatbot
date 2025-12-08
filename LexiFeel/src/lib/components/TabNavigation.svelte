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
    border-top: 1px solid var(--color-neutral-200);
    padding: var(--spacing-3) 0 var(--spacing-4);
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--nav-item-gap);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2) var(--spacing-3);
    transition: all var(--transition-base);
    border-radius: var(--radius-base);
    color: var(--color-neutral-400);
    position: relative;
  }
  
  .nav-item:hover {
    background: var(--color-primary-50);
  }
  
  .nav-item.active {
    color: var(--color-primary-700);
  }
  
  .nav-item.active .icon-wrapper {
    background: var(--gradient-primary-light);
    border-radius: var(--radius-md);
    padding: var(--spacing-2) var(--spacing-4);
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-slow);
  }
  
  .nav-item:not(.active) .icon-wrapper {
    padding: var(--spacing-2) 0;
  }
  
  .nav-label {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-base);
  }
  
  .nav-item.active .nav-label {
    color: var(--color-primary-700);
    font-weight: var(--font-weight-semibold);
  }
</style>
