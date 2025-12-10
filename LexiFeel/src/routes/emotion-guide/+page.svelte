<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  import EmotionModal from '$lib/components/EmotionModal.svelte';
  import BottomNavigation from '$lib/components/BottomNavigation.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  
  let currentTab = 'emotion-guide';
  let selectedEmotion: any = null;
  
  const emotions = [
    { 
      name: 'Happy', 
      emoji: '😊', 
      color: '#fef08a', 
      textColor: '#854d0e',
      description: 'Happiness is a positive emotion characterized by feelings of joy, contentment, and satisfaction.',
      bodySensations: [
        'Lightness in chest or body',
        'Relaxed muscles',
        'Smiling or upturned mouth',
        'Increased energy',
        'Warm feeling throughout body'
      ]
    },
    { 
      name: 'Sad', 
      emoji: '😔', 
      color: '#bfdbfe', 
      textColor: '#1e3a8a',
      description: 'Sadness is a natural response to loss, disappointment, or difficult situations.',
      bodySensations: [
        'Heavy feeling in chest or body',
        'Tight or lump in throat',
        'Low energy, feeling tired',
        'Tears or urge to cry',
        'Slumped posture, looking down'
      ]
    },
    { 
      name: 'Anxious', 
      emoji: '😰', 
      color: '#e9d5ff', 
      textColor: '#6b21a8',
      description: 'Anxiety is a response to perceived threat or uncertainty, often about future events.',
      bodySensations: [
        'Racing or pounding heart',
        'Shallow or rapid breathing',
        'Tightness in chest',
        'Sweating or clammy hands',
        'Restlessness or difficulty sitting still'
      ]
    },
    { 
      name: 'Angry', 
      emoji: '😤', 
      color: '#fecaca', 
      textColor: '#991b1b',
      description: 'Anger is a response to perceived injustice, frustration, or when boundaries are crossed.',
      bodySensations: [
        'Heat rising in face or body',
        'Jaw clenching or teeth grinding',
        'Fists clenching',
        'Tense muscles',
        'Increased heart rate'
      ]
    },
    { 
      name: 'Calm', 
      emoji: '😌', 
      color: '#bbf7d0', 
      textColor: '#14532d',
      description: 'Calmness is a state of peaceful relaxation and mental clarity.',
      bodySensations: [
        'Slow, deep breathing',
        'Relaxed shoulders',
        'Soft facial expression',
        'Steady heart rate',
        'Loose, comfortable muscles'
      ]
    },
    { 
      name: 'Confused', 
      emoji: '😕', 
      color: '#fed7aa', 
      textColor: '#92400e',
      description: 'Confusion occurs when things don\'t make sense or when faced with unclear information.',
      bodySensations: [
        'Furrowed brow',
        'Head tilting',
        'Tightness in forehead',
        'Difficulty focusing eyes',
        'Tension in neck or shoulders'
      ]
    },
    { 
      name: 'Excited', 
      emoji: '🤩', 
      color: '#fbcfe8', 
      textColor: '#831843',
      description: 'Excitement is an energized positive emotion in response to something anticipated or enjoyable.',
      bodySensations: [
        'Butterflies in stomach',
        'Increased heart rate',
        'Wide eyes or smile',
        'Bouncing or fidgeting',
        'Burst of energy'
      ]
    },
    { 
      name: 'Tired', 
      emoji: '😴', 
      color: '#e0e7ff', 
      textColor: '#3730a3',
      description: 'Tiredness is your body\'s signal that it needs rest and recovery.',
      bodySensations: [
        'Heavy eyelids',
        'Yawning',
        'Low energy or sluggishness',
        'Difficulty concentrating',
        'Body feels heavy or weak'
      ]
    }
  ];
  
  function openEmotionModal(emotion: any) {
    selectedEmotion = emotion;
  }
  
  function closeEmotionModal() {
    selectedEmotion = null;
  }
</script>

<div class="chat-container">
  <BotHeader />
  
  <div class="emotion-guide-container">
    <div class="guide-header">
      <Icon icon="mdi:book-open-variant" width={24} color="#7c3aed" />
      <h2>Emotion Guide</h2>
    </div>
    <p class="guide-subtitle">Tap any emotion to learn how it feels in your body</p>
    
    <div class="emotions-grid">
      {#each emotions as emotion}
        <button 
          class="emotion-card" 
          style="background: {emotion.color};"
          on:click={() => openEmotionModal(emotion)}
          aria-label="Learn about {emotion.name}"
        >
          <span class="emotion-emoji">{emotion.emoji}</span>
          <span class="emotion-name" style="color: {emotion.textColor};">{emotion.name}</span>
        </button>
      {/each}
    </div>
  </div>
  
  <BottomNavigation {currentTab} />
</div>

<EmotionModal emotion={selectedEmotion} onClose={closeEmotionModal} />

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    background: white;
    overflow: hidden;
  }
  
  .emotion-guide-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: clamp(14px, 3vw, 20px);
    background: #fefefe;
  }
  
  .guide-header {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 10px);
    margin-bottom: clamp(6px, 1.5vw, 8px);
  }
  
  .guide-header h2 {
    margin: 0;
    font-size: clamp(20px, 4.5vw, 24px);
    font-weight: 600;
    color: #1f2937;
  }
  
  .guide-subtitle {
    margin: 0 0 clamp(14px, 3vw, 20px) 0;
    font-size: clamp(13px, 3vw, 16px);
    color: #a78bfa;
    text-align: center;
  }
  
  .emotions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(10px, 2.5vw, 16px);
  }
  
  .emotion-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 2vw, 12px);
    padding: clamp(20px, 5vw, 32px) clamp(14px, 3.5vw, 20px);
    border: none;
    border-radius: clamp(16px, 4vw, 20px);
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .emotion-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }
  
  .emotion-card:active {
    transform: translateY(0);
  }
  
  .emotion-emoji {
    font-size: clamp(42px, 10vw, 56px);
  }
  
  .emotion-name {
    font-size: clamp(15px, 3.5vw, 18px);
    font-weight: 600;
  }
  
  @media (min-width: 769px) {
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
