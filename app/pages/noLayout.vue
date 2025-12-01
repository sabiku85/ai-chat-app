<script setup lang="ts">
definePageMeta({
  layout: false, // no layout at all
});
</script>

<template>
  <UContainer class="page-container">
    <h1 class="title">This page has no layout</h1>
    <div class="text-center">some other stuff here</div>

    <NuxtLayout name="blue">
      <h1 class="title">Now this page has blue layout</h1>
      <p>
        If we want this page to have a layout, we can use the NuxtLayout
        component here, but we need to specify the name of the layout and the
        layout in definePageMeta must be set to false
      </p>
    </NuxtLayout>

    <UButton
      to="/"
      class="button"
      >Go back</UButton
    >
  </UContainer>
</template>
