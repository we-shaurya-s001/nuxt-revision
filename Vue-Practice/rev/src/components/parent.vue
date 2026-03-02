<script setup>
import { ref } from 'vue'
import child from './child.vue'

const status = ref('Waiting...')

const handleNotify = (payload) => {
  status.value = payload
}
</script>

<template>
  <div>
    <p>Status: {{ status }}</p>
    
    <ChildComponent @updateMessage="handleNotify" />
  </div>
</template>