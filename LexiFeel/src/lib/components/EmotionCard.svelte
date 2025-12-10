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
    gap: 12px;
    padding: 32px 20px;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .emotion-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
  
  .emotion-card:active {
    transform: translateY(-2px);
  }
  
  .emotion-emoji {
    font-size: 56px;
  }
  
  .emotion-name {
    font-size: 18px;
    font-weight: 600;
  }
</style>
