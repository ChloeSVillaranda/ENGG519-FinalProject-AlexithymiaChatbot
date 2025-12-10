<script lang="ts">
  export let checked: boolean = false;
  export let label: string;
  export let description: string = '';
  export let id: string = '';
</script>

<div class="toggle-item">
  <div class="toggle-info">
    <label for={id} class="toggle-label">{label}</label>
    {#if description}
      <span class="toggle-description">{description}</span>
    {/if}
  </div>
  <label class="toggle-switch">
    <input type="checkbox" {id} bind:checked />
    <span class="slider"></span>
  </label>
</div>

<style>
  .toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-4);
  }
  
  .toggle-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    flex: 1;
  }
  
  .toggle-label {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
    cursor: pointer;
  }
  
  .toggle-description {
    font-size: var(--font-size-sm);
    color: var(--color-primary-500);
  }
  
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
    flex-shrink: 0;
    cursor: pointer;
  }
  
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-neutral-300);
    transition: var(--transition-slow);
    border-radius: 28px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: var(--transition-slow);
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background: var(--gradient-primary);
  }
  
  input:checked + .slider:before {
    transform: translateX(24px);
  }
  
  input:focus-visible + .slider {
    outline: 2px solid var(--color-primary-600);
    outline-offset: 2px;
  }
</style>
