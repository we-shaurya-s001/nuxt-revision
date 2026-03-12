<script setup>
import { onMounted } from 'vue'

console.log("lets test ssr and csr")

const posts = await $fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
  console.log('Fetched posts SErver side:', res.length)
  return res
})

onMounted(async () => {
  const clientPosts = await $fetch('https://jsonplaceholder.typicode.com/posts')
  console.log('Fetched posts onMounted:', clientPosts.length)
})
</script>

<template>
  <div>
    <h2>Posts:</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>