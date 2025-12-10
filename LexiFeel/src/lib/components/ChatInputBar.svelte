<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let value: string = '';
  export let placeholder: string = 'Describe what you notice in your body...';
  export let onSend: () => void;
  export let onKeyPress: (event: KeyboardEvent) => void;
</script>

<div class="input-section">
  <div class="input-container">
    <input 
      type="text" 
      placeholder={placeholder}
      bind:value={value}
      on:keypress={onKeyPress}
      aria-label="Message input"
    />
    <button class="icon-button" aria-label="Add emoji">
      <Icon icon="mdi:emoticon-happy-outline" width="24" />
    </button>
    <button class="icon-button" aria-label="Voice input">
      <Icon icon="mdi:microphone" width="24" />
    </button>
  </div>
  <button class="send-button" on:click={onSend} aria-label="Send message">
    <Icon icon="mdi:send" width="24" color="white" />
  </button>
</div>

<style>
  .input-section {
    padding: 16px 20px;
    background: white;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .input-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 2px solid #e9d5ff;
    border-radius: var(--radius-full);
    padding: 8px 20px;
  }
  
  .input-container input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 15px;
    padding: 8px;
    outline: none;
    color: #1f2937;
  }
  
  .input-container input::placeholder {
    color: #9ca3af;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a78bfa;
    transition: all var(--transition-base);
  }
  
  .icon-button:hover {
    color: #7c3aed;
    transform: scale(1.1);
  }
  
  .send-button {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-circle);
    background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
    flex-shrink: 0;
  }
  
  .send-button:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  }
  
  .send-button:active {
    transform: scale(0.95);
  }
</style>
