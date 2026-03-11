<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>Something went wrong</h1>

    <p>{{ error.message }}</p>

    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>