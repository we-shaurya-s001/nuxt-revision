<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">Add 1</button>
  
    <div>
      keeping the count
    </div>
    <div v-if="count > 10">
      You reached the limit!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0)

function increment() {
  count.value++;
}
</script>