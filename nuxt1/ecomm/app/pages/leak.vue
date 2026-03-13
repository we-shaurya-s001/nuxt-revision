<script setup lang="ts">
import {state} from "../utils/leakystore"
const updateState = (name: string) => {
  state.user = name
}
</script>

<template>
  <div>
    <h1>Leaky Store Test</h1>
    <p>Current Shared User: <strong>{{ state.user }}</strong></p>
    
    <button @click="updateState('User_Alpha')">Set to Alpha</button>
    <button @click="updateState('User_Beta')">Set to Beta</button>
  </div>
</template>