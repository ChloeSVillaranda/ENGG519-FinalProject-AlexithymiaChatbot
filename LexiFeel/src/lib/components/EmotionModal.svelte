<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let emotion: {
    name: string;
    emoji: string;
    color: string;
    textColor: string;
    description: string;
    bodySensations: string[];
  } | null = null;
  
  export let onClose: () => void;
  
  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
</script>

{#if emotion}
  <div class="modal-backdrop" on:click={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="emotion-title">
    <div class="modal-content">
      <button class="close-button" on:click={onClose} aria-label="Close modal">
        <Icon icon="mdi:close" width={28} color="#6b7280" />
      </button>
      
      <div class="modal-header" style="background: {emotion.color};">
        <span class="modal-emoji">{emotion.emoji}</span>
        <h2 id="emotion-title" class="modal-title" style="color: {emotion.textColor};">{emotion.name}</h2>
      </div>
      
      <div class="modal-body">
        <section>
          <h3 class="section-title">What is this emotion?</h3>
          <p class="section-text">{emotion.description}</p>
        </section>
        
        <section>
          <h3 class="section-title">How it feels in your body:</h3>
          <ul class="sensations-list">
            {#each emotion.bodySensations as sensation}
              <li class="sensation-item">{sensation}</li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: clamp(16px, 4vw, 24px);
    animation: fadeIn 0.2s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .modal-content {
    background: white;
    border-radius: clamp(20px, 4vw, 28px);
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .close-button {
    position: absolute;
    top: clamp(12px, 2vh, 16px);
    right: clamp(12px, 2vw, 16px);
    background: white;
    border: none;
    width: clamp(36px, 8vw, 44px);
    height: clamp(36px, 8vw, 44px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .close-button:hover {
    background: #f3f4f6;
    transform: scale(1.05);
  }
  
  .modal-header {
    padding: clamp(32px, 6vh, 48px) clamp(20px, 4vw, 32px);
    border-radius: clamp(20px, 4vw, 28px) clamp(20px, 4vw, 28px) 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(12px, 2vh, 16px);
  }
  
  .modal-emoji {
    font-size: clamp(64px, 12vw, 96px);
  }
  
  .modal-title {
    margin: 0;
    font-size: clamp(28px, 5vw, 36px);
    font-weight: 600;
  }
  
  .modal-body {
    padding: clamp(24px, 5vh, 36px) clamp(20px, 4vw, 32px);
    display: flex;
    flex-direction: column;
    gap: clamp(24px, 4vh, 32px);
  }
  
  section {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 2vh, 16px);
  }
  
  .section-title {
    margin: 0;
    font-size: clamp(18px, 2.5vw, 22px);
    font-weight: 600;
    color: #1f2937;
  }
  
  .section-text {
    margin: 0;
    font-size: clamp(15px, 2vw, 17px);
    line-height: 1.6;
    color: #7c3aed;
  }
  
  .sensations-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vh, 14px);
  }
  
  .sensation-item {
    display: flex;
    align-items: flex-start;
    gap: clamp(10px, 2vw, 12px);
    font-size: clamp(14px, 2vw, 16px);
    line-height: 1.5;
    color: #7c3aed;
    padding-left: clamp(20px, 4vw, 24px);
    position: relative;
  }
  
  .sensation-item::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #a78bfa;
    font-size: clamp(18px, 3vw, 22px);
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    .modal-backdrop {
      padding: 0;
    }
    
    .modal-content {
      max-height: 100vh;
      border-radius: 0;
    }
    
    .modal-header {
      border-radius: 0;
    }
  }
</style>
