<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let botName: string = 'Feelio';
  export let status: string = 'Always here to listen';
  export let iconName: string = 'mdi:heart';
</script>

<header class="bot-header">
  <div class="bot-avatar" aria-hidden="true">
    <Icon icon={iconName} width="32" color="var(--color-primary-700)" />
  </div>
  <div class="bot-info">
    <h1 class="bot-name">{botName}</h1>
    <p class="bot-status">{status}</p>
  </div>
</header>

<style>
  .bot-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-4) var(--spacing-5);
    background: white;
    border-bottom: 1px solid var(--color-neutral-200);
  }
  
  .bot-avatar {
    width: var(--avatar-size-base);
    height: var(--avatar-size-base);
    border-radius: var(--radius-circle);
    background: var(--gradient-primary-light);
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
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
  }
  
  .bot-status {
    margin: 2px 0 0 0;
    font-size: var(--font-size-sm);
    color: var(--color-primary-500);
  }
</style>
