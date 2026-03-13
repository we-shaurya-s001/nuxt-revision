    <!-- <template>
        <ClientOnly>
  <div>
    <h1>Hydration Mismatch Demo</h1>
    <p>Current Secret Number: {{ Math.random() }}</p>
  </div>
</ClientOnly>
</template> -->

<script setup>
const randomNumber = ref(0)

onMounted(() => {
  // This code only runs on the client
  randomNumber.value = Math.random()
})
</script>

<template>
  <p>Number: {{ randomNumber }}</p>
</template>
    
