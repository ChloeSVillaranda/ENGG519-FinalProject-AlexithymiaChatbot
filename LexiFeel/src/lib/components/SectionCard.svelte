<script lang="ts">
  /**
   * SectionCard - A reusable card component for sections with consistent styling
   */
  export let noBorder: boolean = false;
</script>

<div class="section-card" class:no-border={noBorder}>
  <slot />
</div>

<style>
  .section-card {
    background: white;
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-lg);
    padding: var(--spacing-5);
    margin-bottom: var(--spacing-5);
  }
  
  .section-card.no-border {
    border: none;
    padding: 0;
  }
</style>
