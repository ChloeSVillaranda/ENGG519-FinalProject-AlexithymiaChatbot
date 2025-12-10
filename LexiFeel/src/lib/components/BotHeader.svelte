<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let botName: string = 'Feelio';
  export let status: string = 'Always here to listen';
  export let iconName: string = 'mdi:heart';
</script>

<header class="chat-header">
  <div class="bot-avatar">
    <Icon icon={iconName} width="32" color="#7c3aed" />
  </div>
  <div class="bot-info">
    <h2 class="bot-name">{botName}</h2>
    <p class="bot-status">{status}</p>
  </div>
</header>

<style>
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
    line-height: 1.2;
  }
  
  .bot-status {
    margin: clamp(2px, 0.5vh, 4px) 0 0 0;
    font-size: clamp(12px, 2.5vw, 14px);
    color: #a78bfa;
    line-height: 1.2;
  }
</style>
