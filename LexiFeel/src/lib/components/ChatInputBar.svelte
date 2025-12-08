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
    padding: var(--spacing-4) var(--spacing-5);
    background: white;
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }
  
  .input-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    background: white;
    border: 2px solid var(--color-primary-200);
    border-radius: var(--radius-full);
    padding: var(--spacing-2) var(--spacing-5);
  }
  
  .input-container input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: var(--font-size-base);
    padding: var(--spacing-2);
    outline: none;
    color: var(--color-neutral-800);
  }
  
  .input-container input::placeholder {
    color: var(--color-neutral-400);
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: var(--spacing-1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary-500);
    transition: all var(--transition-base);
  }
  
  .icon-button:hover {
    color: var(--color-primary-700);
    transform: scale(1.1);
  }
  
  .send-button {
    width: var(--spacing-14);
    height: var(--spacing-14);
    border-radius: var(--radius-circle);
    background: var(--gradient-primary);
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
  }
  
  .send-button:active {
    transform: scale(0.95);
  }
</style>
