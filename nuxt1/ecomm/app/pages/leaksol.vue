<script setup lang="ts">
// No import needed! Nuxt auto-imports useUserStore
const state = useUserStore()

const updateState = (name: string) => {
  state.value.user = name
}
</script>


<template>
  <div>
    <h1>Safe Store (useState)</h1>
    <p>Current User: <strong>{{ state.user }}</strong></p>
    
    <button @click="updateState('User_Alpha')">Set to Alpha</button>
    <button click="updateState('User_Beta')">Set to Beta</button>
  </div>
</template>