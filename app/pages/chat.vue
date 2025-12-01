<script setup lang="ts">
definePageMeta({
  layout: "blue",
  // layout: false     // no layout at all
});
</script>

<template>
  <UContainer class="page-container">
    <h1 class="title">This is a chat</h1>
    <UButton
      to="/"
      class="button"
      >Go back</UButton
    >
  </UContainer>
</template>
