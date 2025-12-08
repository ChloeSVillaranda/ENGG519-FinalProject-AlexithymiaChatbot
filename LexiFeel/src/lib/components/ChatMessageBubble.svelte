<script lang="ts">
  export let type: 'bot' | 'user';
  export let text: string;
  export let time: string;
</script>

<div class="message {type}" role="article" aria-label="{type === 'bot' ? 'Bot' : 'User'} message">
  <div class="message-content">
    <p>{text}</p>
    <span class="message-time">{time}</span>
  </div>
</div>

<style>
  .message {
    display: flex;
    margin-bottom: var(--spacing-4);
  }
  
  .message.bot {
    justify-content: flex-start;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message-content {
    max-width: var(--bubble-max-width);
    padding: var(--spacing-4) var(--spacing-5);
    border-radius: var(--radius-xl);
  }
  
  .message.bot .message-content {
    background: var(--bubble-bot-bg);
    color: var(--bubble-bot-text);
    border-bottom-left-radius: var(--radius-sm);
  }
  
  .message.user .message-content {
    background: var(--bubble-user-bg);
    color: var(--bubble-user-text);
    border-bottom-right-radius: var(--radius-sm);
  }
  
  .message-content p {
    margin: 0 0 var(--spacing-2) 0;
    line-height: var(--line-height-relaxed);
    font-size: var(--font-size-base);
  }
  
  .message-time {
    font-size: var(--font-size-xs);
    opacity: 0.7;
  }
</style>
