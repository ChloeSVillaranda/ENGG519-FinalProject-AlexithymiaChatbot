<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import SectionCard from '$lib/components/SectionCard.svelte';
  import Icon from '@iconify/svelte';
  
  let currentTab = 'insights';
  
  const commonEmotions = [
    { name: 'Happy', emoji: '😊', count: 42, color: '#fef08a', width: '85%' },
    { name: 'Calm', emoji: '😌', count: 38, color: '#bbf7d0', width: '76%' },
    { name: 'Anxious', emoji: '😰', count: 25, color: '#e9d5ff', width: '50%' },
    { name: 'Sad', emoji: '😔', count: 18, color: '#bfdbfe', width: '36%' }
  ];
  
  const moodData = [
    { day: 'Mon', value: 6 },
    { day: 'Tue', value: 7 },
    { day: 'Wed', value: 5 },
    { day: 'Thu', value: 8 },
    { day: 'Fri', value: 9 },
    { day: 'Sat', value: 10 },
    { day: 'Sun', value: 8 }
  ];
</script>

<PageContainer>
  <BotHeader />
  
  <div class="insights-container" role="main">
    <div class="insights-header">
      <h2 class="insights-title">Your Insights</h2>
      <p class="insights-subtitle">Emotional growth over time</p>
    </div>
    
    <!-- Progress Message -->
    <div class="progress-card">
      <div class="progress-icon">
        <Icon icon="mdi:heart-circle" width="48" color="var(--color-primary-700)" />
      </div>
      <div class="progress-content">
        <h3 class="progress-title">Great progress!</h3>
        <p class="progress-text">You've been more open lately. I've noticed you're expressing emotions more clearly and identifying triggers faster. Keep up the amazing work! 🌟</p>
      </div>
    </div>
    
    <!-- Most Common Emotions -->
    <SectionCard>
      <div class="card-title-row">
        <Icon icon="mdi:heart-outline" width="24" color="var(--color-primary-700)" />
        <h3 class="card-title">Most Common Emotions</h3>
      </div>
      <div class="emotions-list">
        {#each commonEmotions as emotion}
          <div class="emotion-row">
            <div class="emotion-info">
              <span class="emotion-emoji">{emotion.emoji}</span>
              <span class="emotion-label">{emotion.name}</span>
            </div>
            <div class="emotion-bar-container">
              <div class="emotion-bar" style="width: {emotion.width}; background: {emotion.color};"></div>
            </div>
            <span class="emotion-count">{emotion.count}</span>
          </div>
        {/each}
      </div>
    </SectionCard>
    
    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <Icon icon="mdi:calendar-blank" width="40" color="var(--color-primary-500)" />
        <div class="stat-number">28</div>
        <div class="stat-label">Days Tracking</div>
      </div>
      <div class="stat-card">
        <Icon icon="mdi:star-outline" width="40" color="var(--color-primary-500)" />
        <div class="stat-number">156</div>
        <div class="stat-label">Emotions Logged</div>
      </div>
    </div>
    
    <!-- Mood Trend -->
    <SectionCard>
      <div class="card-title-row">
        <Icon icon="mdi:chart-line" width="24" color="var(--color-primary-700)" />
        <h3 class="card-title">Mood Trend (Last 7 Days)</h3>
      </div>
      <div class="chart-container">
        <div class="chart-y-axis">
          <span class="y-label">10</span>
          <span class="y-label">6</span>
          <span class="y-label">3</span>
          <span class="y-label">0</span>
        </div>
        <div class="chart-content">
          <svg class="mood-chart" viewBox="0 0 280 120" preserveAspectRatio="none" aria-label="Mood trend chart">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:var(--color-primary-500);stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:var(--color-primary-500);stop-opacity:0.05" />
              </linearGradient>
            </defs>
            <path d="M 0 60 L 40 50 L 80 60 L 120 40 L 160 30 L 200 20 L 240 30 L 280 35" 
                  fill="url(#gradient)" stroke="none"/>
            <path d="M 0 60 L 40 50 L 80 60 L 120 40 L 160 30 L 200 20 L 240 30 L 280 35" 
                  fill="none" stroke="var(--color-primary-600)" stroke-width="3"/>
          </svg>
          <div class="chart-x-axis">
            {#each moodData as data}
              <span class="x-label">{data.day}</span>
            {/each}
          </div>
        </div>
      </div>
    </SectionCard>
    
    <!-- Emotional Growth Progress -->
    <SectionCard>
      <h3 class="card-title">Emotional Growth Progress</h3>
      <div class="progress-bars">
        <div class="progress-item">
          <div class="progress-label-row">
            <span class="progress-label">Emotion Awareness</span>
            <span class="progress-percentage">85%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 85%;"></div>
          </div>
        </div>
        <div class="progress-item">
          <div class="progress-label-row">
            <span class="progress-label">Emotional Vocabulary</span>
            <span class="progress-percentage">72%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 72%;"></div>
          </div>
        </div>
        <div class="progress-item">
          <div class="progress-label-row">
            <span class="progress-label">Trigger Recognition</span>
            <span class="progress-percentage">68%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 68%;"></div>
          </div>
        </div>
      </div>
    </SectionCard>
  </div>
  
  <TabNavigation {currentTab} />
</PageContainer>


<style>
  .insights-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-5);
    background: var(--color-neutral-50);
  }
  
  .insights-header {
    margin-bottom: var(--spacing-5);
  }
  
  .insights-title {
    margin: 0;
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .insights-subtitle {
    margin: var(--spacing-1) 0 0 0;
    font-size: var(--font-size-md);
    color: var(--color-primary-500);
  }
  
  .progress-card {
    background: var(--gradient-primary-subtle);
    border-radius: var(--radius-lg);
    padding: var(--spacing-5);
    margin-bottom: var(--spacing-5);
    display: flex;
    gap: var(--spacing-4);
    align-items: flex-start;
  }
  
  .progress-icon {
    flex-shrink: 0;
  }
  
  .progress-content {
    flex: 1;
  }
  
  .progress-title {
    margin: 0 0 var(--spacing-2) 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .progress-text {
    margin: 0;
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--color-primary-800);
  }
  
  .card-title-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-4);
  }
  
  .card-title {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-800);
  }
  
  .emotions-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .emotion-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }
  
  .emotion-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    min-width: 100px;
  }
  
  .emotion-emoji {
    font-size: var(--font-size-2xl);
  }
  
  .emotion-label {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-neutral-800);
  }
  
  .emotion-bar-container {
    flex: 1;
    height: var(--spacing-8);
    background: var(--color-neutral-200);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  
  .emotion-bar {
    height: 100%;
    border-radius: var(--radius-md);
    transition: width var(--transition-slow);
  }
  
  .emotion-count {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-700);
    min-width: 40px;
    text-align: right;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-5);
  }
  
  .stat-card {
    background: white;
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-lg);
    padding: var(--spacing-6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-3);
  }
  
  .stat-number {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-800);
  }
  
  .stat-label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary-500);
    text-align: center;
  }
  
  .chart-container {
    display: flex;
    gap: var(--spacing-2);
  }
  
  .chart-y-axis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacing-2) 0;
  }
  
  .y-label {
    font-size: var(--font-size-xs);
    color: var(--color-primary-500);
  }
  
  .chart-content {
    flex: 1;
  }
  
  .mood-chart {
    width: 100%;
    height: 120px;
  }
  
  .chart-x-axis {
    display: flex;
    justify-content: space-between;
    padding-top: var(--spacing-2);
  }
  
  .x-label {
    font-size: var(--font-size-xs);
    color: var(--color-primary-500);
  }
  
  .progress-bars {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
  }
  
  .progress-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
  
  .progress-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress-label {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary-800);
  }
  
  .progress-percentage {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-700);
  }
  
  .progress-track {
    height: 12px;
    background: var(--color-neutral-200);
    border-radius: var(--radius-sm);
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: var(--radius-sm);
    transition: width var(--transition-slow);
  }
</style>
