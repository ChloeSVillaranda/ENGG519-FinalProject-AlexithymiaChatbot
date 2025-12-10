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
    margin-bottom: 16px;
  }
  
  .message.bot {
    justify-content: flex-start;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message-content {
    max-width: 80%;
    padding: 16px 20px;
    border-radius: 24px;
  }
  
  .message.bot .message-content {
    background: #f3e8ff;
    color: #5b21b6;
    border-bottom-left-radius: 6px;
  }
  
  .message.user .message-content {
    background: #8b5cf6;
    color: white;
    border-bottom-right-radius: 6px;
  }
  
  .message-content p {
    margin: 0 0 8px 0;
    line-height: 1.6;
    font-size: 15px;
  }
  
  .message-time {
    font-size: 12px;
    opacity: 0.7;
  }
</style>
