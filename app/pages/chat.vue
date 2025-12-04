<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

useHead({
  title: chat.value.title,
  htmlAttrs: {
    class: "my-unique-class",
  },
  script: [
    {
      innerHTML: 'window.analytics = window.analytics || ["hi"]',
    },
  ],
});
</script>

<template>
  <ChatWindow
    :chat
    :messages
    @send-message="sendMessage"
  />
</template>
