<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import BotHeader from '$lib/components/BotHeader.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import ChatMessageBubble from '$lib/components/ChatMessageBubble.svelte';
  import ChatInputBar from '$lib/components/ChatInputBar.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';

  let messages = [
    {
      id: 1,
      type: 'bot' as const,
      text: "Hi there! I'm here to help you explore and understand your emotions. Let's start with what you notice in your body. How do you physically feel right now?",
      time: '07:20 PM'
    }
  ];
  
  let inputText = '';
  let currentTab = 'chat';
  
  function sendMessage() {
    if (inputText.trim()) {
      messages = [...messages, {
        id: messages.length + 1,
        type: 'user' as const,
        text: inputText,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      }];
      inputText = '';
      
      setTimeout(() => {
        messages = [...messages, {
          id: messages.length + 1,
          type: 'bot' as const,
          text: "Thank you for sharing. That's a good start in recognizing what's happening in your body. Can you tell me more about what emotions you might be feeling?",
          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        }];
      }, 1000);
    }
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
</script>

<PageContainer>
  <BotHeader />
  
  <div class="messages-container" role="main">
    {#each messages as message (message.id)}
      <ChatMessageBubble 
        type={message.type}
        text={message.text}
        time={message.time}
      />
    {/each}
  </div>
  
  <div class="reflect-section">
    <PrimaryButton 
      variant="secondary" 
      icon="mdi:sparkles" 
      fullWidth={true}
      ariaLabel="Reflect on this conversation"
    >
      Reflect on this conversation
    </PrimaryButton>
  </div>
  
  <ChatInputBar 
    bind:value={inputText}
    onSend={sendMessage}
    onKeyPress={handleKeyPress}
  />
  
  <TabNavigation {currentTab} />
</PageContainer>

<style>
  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-5);
    background: var(--color-neutral-50);
  }
  
  .reflect-section {
    padding: var(--spacing-4) var(--spacing-5);
    background: white;
  }
</style>
