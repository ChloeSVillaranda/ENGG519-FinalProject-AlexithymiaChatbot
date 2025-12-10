<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let botName: string = 'Feelio';
  export let status: string = 'Always here to listen';
  export let iconName: string = 'mdi:heart';
</script>

<header class="bot-header">
  <div class="bot-avatar" aria-hidden="true">
    <Icon icon={iconName} width="32" color="#7c3aed" />
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
</style>
