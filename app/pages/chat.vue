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

// useHeadSafe({
//   title: chat.value.title,
//   htmlAttrs: {
//     class: "my-unique-class",
//   },
//   script: [
//     {
//       innerHTML: 'window.analytics = window.analytics || ["hi"]',    // for useHeadSafe() composable it cannot be used innerHTML property, because it's unsafe - the user could inject any sort of javascript on the website
//     },
//   ],
// });
</script>

<template>
  <ChatWindow
    :chat
    :messages
    @send-message="sendMessage"
  />
</template>
