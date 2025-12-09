<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import EmotionCard from '$lib/components/EmotionCard.svelte';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'emotion-guide';
  
  const emotions = [
    { name: 'Happy', emoji: '😊', color: '#fef08a', textColor: '#854d0e' },
    { name: 'Sad', emoji: '😔', color: '#bfdbfe', textColor: '#1e3a8a' },
    { name: 'Anxious', emoji: '😰', color: '#e9d5ff', textColor: '#6b21a8' },
    { name: 'Angry', emoji: '😤', color: '#fecaca', textColor: '#991b1b' },
    { name: 'Calm', emoji: '😌', color: '#bbf7d0', textColor: '#14532d' },
    { name: 'Confused', emoji: '😕', color: '#fed7aa', textColor: '#92400e' },
    { name: 'Excited', emoji: '🤩', color: '#fbcfe8', textColor: '#831843' },
    { name: 'Tired', emoji: '😴', color: '#e0e7ff', textColor: '#3730a3' }
  ];
</script>

<PageContainer>
  <BotHeader />
  
  <div class="emotion-guide-container" role="main">
    <div class="guide-header">
      <Icon icon="mdi:book-open-variant" width="32" color="#7c3aed" />
      <h2>Emotion Guide</h2>
    </div>
    <p class="guide-subtitle">Tap any emotion to learn how it feels in your body</p>
    
    <div class="emotions-grid">
      {#each emotions as emotion}
        <EmotionCard
          name={emotion.name}
          emoji={emotion.emoji}
          color={emotion.color}
          textColor={emotion.textColor}
          onClick={() => console.log(`Clicked ${emotion.name}`)}
        />
      {/each}
    </div>
  </div>
  
  <TabNavigation {currentTab} />
</PageContainer>

<style>
  .emotion-guide-container {
    flex: 1;
    overflow-y: auto;
    padding: 24px 20px;
    background: #fefefe;
  }
  
  .guide-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }
  
  .guide-header h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .guide-subtitle {
    margin: 0 0 24px 0;
    font-size: 16px;
    color: #a78bfa;
    text-align: center;
  }
  
  .emotions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (min-width: 769px) {
    .emotions-grid {
      gap: 20px;
    }
  }
</style>
