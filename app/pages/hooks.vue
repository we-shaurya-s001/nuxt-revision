<script setup>
import {ref,onUnmounted,onMounted,onUpdated} from 'vue';

const vivekcounter = ref(0);

 onMounted(()=>{
    console.log('component mounted')
 })  
onUnmounted(()=>{
    console.log('component mounted')
 }) 

 onUpdated(()=>{
    console.log('Updated mounted')
 }) 

 const increaseCountvivek = () => {
    vivekcounter.value++
 }

</script>

<template>
<div >

    <button @click="increaseCountvivek">{{vivekcounter}}</button>

</div>
</template>