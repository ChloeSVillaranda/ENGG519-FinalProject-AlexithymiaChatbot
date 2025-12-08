<script lang="ts">
  import Icon from '@iconify/svelte';
  
  export let onClick: (() => void) | undefined = undefined;
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let icon: string | null = null;
  export let fullWidth: boolean = false;
  export let disabled: boolean = false;
  export let ariaLabel: string | null = null;
</script>

<button 
  class="btn btn-{variant}"
  class:full-width={fullWidth}
  on:click={onClick}
  {disabled}
  aria-label={ariaLabel}
>
  {#if icon}
    <Icon icon={icon} width="20" />
  {/if}
  <slot />
</button>

<style>
  .btn {
    padding: var(--spacing-3) var(--spacing-5);
    border-radius: var(--radius-full);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all var(--transition-base);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    border: none;
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .btn-primary {
    background: var(--gradient-primary);
    color: white;
  }
  
  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-secondary {
    background: white;
    color: var(--color-primary-700);
    border: 2px solid var(--color-primary-200);
  }
  
  .btn-secondary:hover:not(:disabled) {
    background: var(--color-primary-50);
    border-color: var(--color-primary-400);
  }
  
  .btn-outline {
    background: transparent;
    color: var(--color-primary-500);
    border: none;
  }
  
  .btn-outline:hover:not(:disabled) {
    color: var(--color-primary-700);
  }
  
  .full-width {
    width: 100%;
  }
</style>
