<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import SectionCard from '$lib/components/SectionCard.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'journal';
  
  const weekMoods = [
    { day: 'Sun', color: '#bbf7d0' },
    { day: 'Mon', color: '#fef08a' },
    { day: 'Tue', color: '#e9d5ff' },
    { day: 'Wed', color: '#bfdbfe' },
    { day: 'Thu', color: '#fef08a' }
  ];
  
  let todayEvents = '';
  let bodyFelt = '';
  let notableMoments = '';
  
  function saveReflection() {
    console.log('Saving reflection:', { todayEvents, bodyFelt, notableMoments });
    // Add save logic here
  }
</script>

<PageContainer>
  <BotHeader />
  
  <div class="journal-container" role="main">
    <div class="journal-header">
      <div class="header-left">
        <h2 class="journal-title">Daily Reflection</h2>
        <p class="journal-date">Friday, October 24, 2025</p>
      </div>
      <button class="download-button" aria-label="Download journal">
        <Icon icon="mdi:download" width="24" color="var(--color-primary-500)" />
      </button>
    </div>
    
    <SectionCard>
      <div class="card-header">
        <Icon icon="mdi:calendar-blank" width="24" color="var(--color-primary-700)" />
        <h3>This Week's Moods</h3>
      </div>
      <div class="mood-dots">
        {#each weekMoods as mood}
          <div class="mood-item">
            <div class="mood-dot" style="background: {mood.color};"></div>
            <span class="mood-day">{mood.day}</span>
          </div>
        {/each}
      </div>
    </SectionCard>
    
    <SectionCard>
      <h3 class="card-title">What happened today...</h3>
      <textarea
        class="reflection-textarea"
        placeholder="Describe events, interactions, or situations from your day..."
        bind:value={todayEvents}
        aria-label="What happened today"
      ></textarea>
      <PrimaryButton variant="outline" icon="mdi:creation">
        AI suggestions
      </PrimaryButton>
    </SectionCard>
    
    <SectionCard>
      <h3 class="card-title">How my body felt...</h3>
      <textarea
        class="reflection-textarea small"
        placeholder="Describe physical sensations (tight chest, heavy limbs, racing heart, tense shoulders, etc.)..."
        bind:value={bodyFelt}
        aria-label="How my body felt"
      ></textarea>
    </SectionCard>
    
    <SectionCard>
      <h3 class="card-title">Notable Moments ☀️</h3>
      <textarea
        class="reflection-textarea small"
        placeholder="What stood out to you today? Any interactions or moments you keep thinking about..."
        bind:value={notableMoments}
        aria-label="Notable moments"
      ></textarea>
    </SectionCard>
    
    <PrimaryButton fullWidth={true} onClick={saveReflection}>
      Save Reflection
    </PrimaryButton>
    
    <p class="quote">
      "Every experience and sensation is a clue to understanding your emotional world."
    </p>
  </div>
  
  <TabNavigation {currentTab} />
</PageContainer>

<style>
  .journal-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-5);
    background: var(--color-neutral-50);
  }
  
  .journal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-6);
  }
  
  .header-left {
    flex: 1;
  }
  
  .journal-title {
    margin: 0;
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .journal-date {
    margin: var(--spacing-1) 0 0 0;
    font-size: var(--font-size-md);
    color: var(--color-primary-500);
  }
  
  .download-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-base);
  }
  
  .download-button:hover {
    transform: scale(1.1);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-4);
  }
  
  .card-header h3 {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
  }
  
  .mood-dots {
    display: flex;
    gap: var(--spacing-4);
    justify-content: center;
  }
  
  .mood-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-2);
  }
  
  .mood-dot {
    width: var(--spacing-16);
    height: var(--spacing-16);
    border-radius: var(--radius-md);
    transition: transform var(--transition-base);
    cursor: pointer;
  }
  
  .mood-dot:hover {
    transform: scale(1.05);
  }
  
  .mood-day {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary-500);
  }
  
  .card-title {
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .reflection-textarea {
    width: 100%;
    min-height: 140px;
    padding: var(--spacing-4);
    border: 1px solid var(--color-primary-200);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-family: inherit;
    resize: vertical;
    outline: none;
    color: var(--color-neutral-800);
    background: var(--color-neutral-50);
    box-sizing: border-box;
  }
  
  .reflection-textarea.small {
    min-height: 100px;
  }
  
  .reflection-textarea::placeholder {
    color: var(--color-primary-400);
  }
  
  .reflection-textarea:focus {
    border-color: var(--color-primary-500);
  }
  
  .quote {
    text-align: center;
    font-size: var(--font-size-sm);
    font-style: italic;
    color: var(--color-primary-400);
    margin: var(--spacing-4) 0;
  }
</style>
