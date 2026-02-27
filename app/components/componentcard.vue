<template>
    Component 1
    </template>


<script setup>
import {ref} from "vue";

const increasecounter = ref(0);

const funcinccounter = () => {
    increasecounter.value++
}




</script>