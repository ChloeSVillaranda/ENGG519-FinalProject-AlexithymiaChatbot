<script lang="ts">
  /**
   * PageContainer - A wrapper component that provides consistent layout structure
   * for all pages in the Feelio application
   */
</script>

<div class="page-container">
  <slot />
</div>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    background: white;
  }
  
  @media (min-width: 769px) {
    .page-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
      height: 100vh;
    }
  }
</style>
