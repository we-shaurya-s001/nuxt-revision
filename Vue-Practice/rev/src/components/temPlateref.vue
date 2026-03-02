<script setup>
import { ref, onMounted } from 'vue'

const searchInput = ref(null)

const focusInput = () => {
  if (searchInput.value) { 
    searchInput.value.focus()
    searchInput.value.style.border = '2px solid blue'
  }
}

onMounted(() => {
  searchInput.value.focus()
})
</script>

<template>
  <div class="container">
    <h3>Search Pro</h3>
    
    <input 
      ref="searchInput" 
      type="text" 
      placeholder="Start typing..."
    />

    <button @click="focusInput">
      Manual Focus
    </button>
  </div>
</template>

<style scoped>
input { padding: 8px; margin-right: 10px; }
button { cursor: pointer; }
</style>