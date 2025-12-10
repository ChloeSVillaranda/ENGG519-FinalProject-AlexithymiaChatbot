<script lang="ts">
  import { onMount } from 'svelte';
  import { darkMode } from '$lib/stores/theme';
  import '../app.css';

  onMount(() => {
    // Apply initial dark mode state
    const unsubscribe = darkMode.subscribe(isDark => {
      document.documentElement.classList.toggle('dark', isDark);
    });

    return unsubscribe;
  });
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #f5f0ff 0%, #fff 100%);
    height: 100vh;
    overflow: hidden;
  }
</style>
