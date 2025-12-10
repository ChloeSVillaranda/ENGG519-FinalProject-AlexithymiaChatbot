<script lang="ts">
  /**
   * SectionCard - A reusable card component for sections with consistent styling
   */
  export let noBorder: boolean = false;
</script>

<div class="section-card">
  <slot />
</div>

<style>
  .section-card {
    background: var(--bg-card, white);
    border: 1px solid var(--border-color, #f3f4f6);
    border-radius: 18px;
    padding: 16px;
    margin-bottom: 16px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  @media (min-width: 769px) {
    .section-card {
      padding: 20px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }
  
  .section-card.no-border {
    border: none;
    padding: 0;
  }
</style>
