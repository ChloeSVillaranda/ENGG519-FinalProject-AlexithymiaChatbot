<script lang="ts">
  export let name: string;
  export let emoji: string;
  export let color: string;
  export let textColor: string;
  export let onClick: () => void = () => {};
</script>

<button 
  class="emotion-card" 
  style="background: {color};"
  on:click={onClick}
  aria-label="Emotion: {name}"
>
  <span class="emotion-emoji" aria-hidden="true">{emoji}</span>
  <span class="emotion-name" style="color: {textColor};">{name}</span>
</button>

<style>
  .emotion-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-3);
    padding: var(--spacing-8) var(--spacing-5);
    border: none;
    border-radius: var(--radius-xl);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
  }
  
  .emotion-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  
  .emotion-card:active {
    transform: translateY(-2px);
  }
  
  .emotion-emoji {
    font-size: var(--spacing-14);
  }
  
  .emotion-name {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
  }
</style>
