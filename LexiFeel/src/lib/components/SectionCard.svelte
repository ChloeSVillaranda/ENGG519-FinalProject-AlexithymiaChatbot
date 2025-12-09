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
    border: 1px solid #f3f4f6;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .section-card.no-border {
    border: none;
    padding: 0;
  }
</style>
