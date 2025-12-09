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
            <div class="progress-fill" style="width: 85%; background: linear-gradient(90deg, #a78bfa 0%, #8b5cf6 100%);"></div>
          </div>
        </div>
        <div class="progress-item">
          <div class="progress-label-row">
            <span class="progress-label">Emotional Vocabulary</span>
            <span class="progress-percentage">72%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 72%; background: linear-gradient(90deg, #a78bfa 0%, #8b5cf6 100%);"></div>
          </div>
        </div>
        <div class="progress-item">
          <div class="progress-label-row">
            <span class="progress-label">Trigger Recognition</span>
            <span class="progress-percentage">68%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 68%; background: linear-gradient(90deg, #a78bfa 0%, #8b5cf6 100%);"></div>
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
    padding: 20px;
    background: #fefefe;
  }
  
  .insights-header {
    margin-bottom: 20px;
  }
  
  .insights-title {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .insights-subtitle {
    margin: 4px 0 0 0;
    font-size: 16px;
    color: #a78bfa;
  }
  
  .progress-card {
    background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  
  .progress-icon {
    flex-shrink: 0;
  }
  
  .progress-content {
    flex: 1;
  }
  
  .progress-title {
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .progress-text {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: #6b21a8;
  }
  
  .card-title-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .card-title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .emotions-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .emotion-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .emotion-info {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 100px;
  }
  
  .emotion-emoji {
    font-size: 24px;
  }
  
  .emotion-label {
    font-size: 15px;
    font-weight: 500;
    color: #1f2937;
  }
  
  .emotion-bar-container {
    flex: 1;
    height: 32px;
    background: #f3f4f6;
    border-radius: 16px;
    overflow: hidden;
  }
  
  .emotion-bar {
    height: 100%;
    border-radius: 16px;
    transition: width 0.3s ease;
  }
  
  .emotion-count {
    font-size: 18px;
    font-weight: 600;
    color: #7c3aed;
    min-width: 40px;
    text-align: right;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }
  
  .stat-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .stat-number {
    font-size: 32px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .stat-label {
    font-size: 14px;
    font-weight: 500;
    color: #a78bfa;
    text-align: center;
  }
  
  .chart-container {
    display: flex;
    gap: 8px;
  }
  
  .chart-y-axis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
  }
  
  .y-label {
    font-size: 12px;
    color: #a78bfa;
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
    padding-top: 8px;
  }
  
  .x-label {
    font-size: 12px;
    color: #a78bfa;
  }
  
  .progress-bars {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .progress-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .progress-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress-label {
    font-size: 15px;
    font-weight: 500;
    color: #6b21a8;
  }
  
  .progress-percentage {
    font-size: 15px;
    font-weight: 600;
    color: #7c3aed;
  }
  
  .progress-track {
    height: 12px;
    background: #f3f4f6;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    border-radius: 6px;
    transition: width 0.3s ease;
  }
</style>
