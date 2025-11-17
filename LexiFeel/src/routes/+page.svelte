<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  let ringElement: HTMLDivElement;
  let logoElement: HTMLDivElement;
  let emojiElements: HTMLSpanElement[] = [];
  
  onMount(() => {
    // Pulsating ring animation that fades out
    gsap.to(ringElement, {
      scale: 1.5,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
      repeat: -1,
      repeatDelay: 0
    });
    
    // Logo glow effect
    gsap.to(logoElement, {
      boxShadow: "0 25px 60px rgba(139, 92, 246, 0.6)",
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    
    // Wave animation for emojis
    emojiElements.forEach((emoji, index) => {
      gsap.to(emoji, {
        y: -10,
        duration: 0.9,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.15
      });
    });
  });
  
  function navigateToChat() {
    goto('/chat');
  }
</script>

<div class="welcome-container">
  <div class="content">
    <div class="logo-container">
      <div class="pulse-ring" bind:this={ringElement}></div>
      <div class="logo" bind:this={logoElement}>
        <div class="heart">💜</div>
      </div>
    </div>
    
    <h1 class="title">Feelio</h1>
    
    <p class="subtitle">
      Hi, I'm Feelio — your emotional companion.
    </p>
    
    <p class="description">
      Let's explore your feelings together in a safe, judgment-free space.
    </p>
    
    <div class="emoji-row">
      <span class="emoji" bind:this={emojiElements[0]}>😊</span>
      <span class="emoji" bind:this={emojiElements[1]}>😌</span>
      <span class="emoji" bind:this={emojiElements[2]}>😢</span>
      <span class="emoji" bind:this={emojiElements[3]}>😰</span>
      <span class="emoji" bind:this={emojiElements[4]}>😴</span>
    </div>
    
    <button class="start-button" on:click={navigateToChat}>
      Start Understanding My Feelings
    </button>
    
    <p class="footer-text">
      Private • Safe • Non-judgmental
    </p>
  </div>
</div>

<style>
  .welcome-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .content {
    text-align: center;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
  }
  
  .pulse-ring {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e0d4f7 0%, #c4b5fd 50%, #a78bfa 100%);
    opacity: 0.8;
    pointer-events: none;
  }
  
  .logo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e0d4f7 0%, #c4b5fd 50%, #a78bfa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  
  .heart {
    font-size: 48px;
    position: relative;
    z-index: 1;
  }
  
  .title {
    font-size: 38px;
    color: #7c3aed;
    margin: 0 0 12px 0;
    font-weight: 600;
  }
  
  .subtitle {
    font-size: 17px;
    color: #6b7280;
    margin: 0 0 10px 0;
    font-weight: 500;
  }
  
  .description {
    font-size: 14px;
    color: #9ca3af;
    margin: 0 0 25px 0;
    line-height: 1.5;
  }
  
  .emoji-row {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
  }
  
  .emoji {
    font-size: 26px;
    opacity: 0.6;
    transition: transform 0.2s, opacity 0.2s;
    display: inline-block;
  }
  
  .emoji:hover {
    transform: scale(1.2);
    opacity: 1;
  }
  
  .start-button {
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    color: white;
    border: none;
    padding: 15px 34px;
    font-size: 16px;
    border-radius: 50px;
    cursor: pointer;
    width: 100%;
    max-width: 400px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .start-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(139, 92, 246, 0.5);
  }
  
  .start-button:active {
    transform: translateY(0);
  }
  
  .footer-text {
    margin-top: 20px;
    font-size: 12px;
    color: #9ca3af;
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 0 15px;
    }
    
    .pulse-ring {
      width: 95px;
      height: 95px;
    }
    
    .logo {
      width: 95px;
      height: 95px;
    }
    
    .heart {
      font-size: 40px;
    }
    
    .title {
      font-size: 34px;
    }
    
    .subtitle {
      font-size: 15px;
    }
    
    .description {
      font-size: 13px;
    }
    
    .emoji {
      font-size: 24px;
    }
    
    .start-button {
      font-size: 15px;
      padding: 13px 28px;
    }
    
    .footer-text {
      font-size: 11px;
    }
  }
  
  @media (max-height: 700px) {
    .pulse-ring {
      width: 85px;
      height: 85px;
    }
    
    .logo {
      width: 85px;
      height: 85px;
    }
    
    .heart {
      font-size: 36px;
    }
    
    .logo-container {
      margin-bottom: 10px;
    }
    
    .title {
      font-size: 32px;
      margin-bottom: 8px;
    }
    
    .subtitle {
      font-size: 15px;
      margin-bottom: 6px;
    }
    
    .description {
      font-size: 13px;
      margin-bottom: 18px;
    }
    
    .emoji-row {
      margin-bottom: 18px;
    }
    
    .emoji {
      font-size: 22px;
    }
    
    .start-button {
      padding: 12px 28px;
      font-size: 15px;
    }
    
    .footer-text {
      margin-top: 15px;
      font-size: 11px;
    }
  }
</style>
