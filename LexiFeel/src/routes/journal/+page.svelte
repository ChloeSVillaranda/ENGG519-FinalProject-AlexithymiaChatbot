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
        <Icon icon="mdi:download" width="24" color="#a78bfa" />
      </button>
    </div>
    
    <SectionCard>
      <div class="card-header">
        <Icon icon="mdi:calendar-blank" width="24" color="#7c3aed" />
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
      <PrimaryButton variant="outline" icon="mdi:creation" onClick={() => console.log('AI suggestions')}>
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
    padding: 20px;
    background: #fefefe;
  }
  
  .journal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  
  .header-left {
    flex: 1;
  }
  
  .journal-title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .journal-date {
    margin: 4px 0 0 0;
    font-size: 16px;
    color: #a78bfa;
  }
  
  .download-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  
  .download-button:hover {
    transform: scale(1.1);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .mood-dots {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  
  .mood-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .mood-dot {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .mood-dot:hover {
    transform: scale(1.05);
  }
  
  .mood-day {
    font-size: 14px;
    font-weight: 500;
    color: #a78bfa;
  }
  
  .card-title {
    margin: 0 0 16px 0;
    font-size: 18px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .reflection-textarea {
    width: 100%;
    min-height: 140px;
    padding: 16px;
    border: 1px solid #e9d5ff;
    border-radius: 16px;
    font-size: 15px;
    font-family: inherit;
    resize: vertical;
    outline: none;
    color: #1f2937;
    background: #fefefe;
    box-sizing: border-box;
  }
  
  .reflection-textarea.small {
    min-height: 100px;
  }
  
  .reflection-textarea::placeholder {
    color: #c4b5fd;
  }
  
  .reflection-textarea:focus {
    border-color: #a78bfa;
  }
  
  .quote {
    text-align: center;
    font-size: 14px;
    font-style: italic;
    color: #c4b5fd;
    margin: 16px 0;
  }
</style>
