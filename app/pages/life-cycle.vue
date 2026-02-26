<script setup>
import { ref, onUnmounted,onMounted,onUpdated } from 'vue';
const count = ref(0);

onMounted(()=>{
    console.log('component mounted')
})
onUpdated(()=>{
    console.log('updated the code')
})

onUnmounted(()=>{
    console.log('onUnmounted code')
})

const increaseCount = () => {
count.value++;
}

</script>

<template>
<div >
<div>Shaurya saxena</div>
<button @click="increaseCount">{{count}}</button>
</div>

</template>