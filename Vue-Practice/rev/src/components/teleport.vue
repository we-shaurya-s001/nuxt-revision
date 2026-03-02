<template>
  <div class="main-content">
    <h1>My App Content</h1>
    
    <button @click="open = true">Open Modal</button>

    <Teleport to="body">
      <div v-if="open" class="modal-overlay">
        <div class="modal-content">
          <p>I am now a child of the BODY tag, not the App div!</p>
          <button @click="open = false">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>