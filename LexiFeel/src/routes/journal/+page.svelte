<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import SectionCard from '$lib/components/SectionCard.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
  import Icon from '@iconify/svelte';
  import BottomNavigation from '$lib/components/BottomNavigation.svelte';
  
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

<div class="chat-container">
  <header class="chat-header">
    <div class="bot-avatar">
      <Icon icon="mdi:heart" width="32" color="#7c3aed" />
    </div>
    <div class="bot-info">
      <h2 class="bot-name">Feelio</h2>
      <p class="bot-status">Always here to listen</p>
    </div>
  </header>
  
  <div class="journal-container">
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
  
  <BottomNavigation {currentTab} />
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    background: white;
    overflow: hidden;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: white;
    border-bottom: 1px solid #f3f4f6;
    flex-shrink: 0;
  }
  
  .bot-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .bot-info {
    flex: 1;
    min-width: 0;
  }
  
  .bot-name {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .bot-status {
    margin: 2px 0 0 0;
    font-size: 13px;
    color: #a78bfa;
  }
  
  .journal-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    background: #fefefe;
  }
  
  .journal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .header-left {
    flex: 1;
    min-width: 0;
  }
  
  .journal-title {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .journal-date {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #a78bfa;
  }
  
  .download-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  
  .download-button:hover {
    transform: scale(1.1);
  }
  
  .mood-tracker-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 18px;
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }
  
  .mood-dots {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  
  .mood-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  
  .mood-dot {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    transition: transform 0.2s;
  }
  
  .mood-dot:hover {
    transform: scale(1.05);
  }
  
  .mood-day {
    font-size: 12px;
    font-weight: 500;
    color: #a78bfa;
  }
  
  .reflection-card {
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 18px;
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .card-title {
    margin: 0 0 12px 0;
    font-size: 16px;
    font-weight: 600;
    color: #6b21a8;
  }
  
  .reflection-textarea {
    width: 100%;
    min-height: 100px;
    padding: 14px;
    border: 1px solid #e9d5ff;
    border-radius: 14px;
    font-size: 14px;
    font-family: inherit;
    resize: vertical;
    outline: none;
    color: #1f2937;
    background: #fefefe;
    box-sizing: border-box;
  }
  
  .reflection-textarea.small {
    min-height: 80px;
  }
  
  .reflection-textarea::placeholder {
    color: #c4b5fd;
  }
  
  .reflection-textarea:focus {
    border-color: #a78bfa;
  }
  
  .ai-suggestions-button {
    margin-top: 10px;
    padding: 8px 16px;
    background: transparent;
    border: none;
    color: #a78bfa;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
  }
  
  .ai-suggestions-button:hover {
    color: #7c3aed;
  }
  
  .save-button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    border: none;
    border-radius: 50px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    margin-bottom: 12px;
  }
  
  .save-button:hover {
    transform: translateY(-2px);
  }
  
  .quote {
    text-align: center;
    font-size: 12px;
    font-style: italic;
    color: #c4b5fd;
    margin: 0 0 16px 0;
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: white;
    border-top: 1px solid #f3f4f6;
    padding: 10px 0 12px;
    flex-shrink: 0;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 6px 8px;
    transition: all 0.2s;
    border-radius: 12px;
    color: #9ca3af;
    min-width: 0;
    flex: 1;
    max-width: 80px;
  }
  
  .nav-item:hover {
    background: #faf5ff;
  }
  
  .nav-item.active {
    color: #7c3aed;
  }
  
  .nav-item.active .icon-wrapper {
    background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
    border-radius: 14px;
    padding: 6px 12px;
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .nav-item:not(.active) .icon-wrapper {
    padding: 6px 0;
  }
  
  .nav-label {
    font-size: 11px;
    font-weight: 500;
    transition: color 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  
  .nav-item.active .nav-label {
    color: #7c3aed;
    font-weight: 600;
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .bot-avatar {
      width: 60px;
      height: 60px;
    }
    
    .bot-name {
      font-size: 20px;
    }
    
    .bot-status {
      font-size: 14px;
    }
    
    .journal-container {
      padding: 20px;
    }
    
    .journal-title {
      font-size: 24px;
    }
    
    .journal-date {
      font-size: 16px;
    }
    
    .mood-tracker-card,
    .reflection-card {
      padding: 20px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    
    .card-header h3 {
      font-size: 18px;
    }
    
    .mood-dot {
      width: 64px;
      height: 64px;
      border-radius: 16px;
    }
    
    .mood-day {
      font-size: 14px;
    }
    
    .card-title {
      font-size: 18px;
    }
    
    .reflection-textarea {
      min-height: 140px;
      padding: 16px;
      font-size: 15px;
      border-radius: 16px;
    }
    
    .reflection-textarea.small {
      min-height: 100px;
    }
    
    .save-button {
      padding: 16px;
      font-size: 18px;
      margin-bottom: 16px;
    }
    
    .quote {
      font-size: 14px;
      margin-bottom: 20px;
    }
    
    .nav-item {
      padding: 8px 12px;
      max-width: none;
    }
    
    .nav-label {
      font-size: 12px;
    }
  }
</style>
