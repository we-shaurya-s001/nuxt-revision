<script setup>
const { data, error } = await useAsyncData('posts', () => 
  $fetch('https://jsonplaceholder.typicode.com/posts')
)
</script>

<template>
  <div>
    <h2>Posts:</h2>
    <pre>{{ data }}</pre>
    
    <div v-if="error">
      Error loading data: {{ error.message }}
    </div>
  </div>
</template>     