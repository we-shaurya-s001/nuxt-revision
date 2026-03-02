<script setup>
const emit = defineEmits(['updateMessage', 'deleteItem'])

const sendMessage = () => {
  emit('updateMessage', 'Hello from your child!')
}
</script>

<template>
  <button @click="sendMessage">Click to notify Parent</button>
</template>