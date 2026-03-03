<template>
<div><input 
      v-model="newTodo" 
      @keyup.enter="addTodo" 
      type="text" 
      placeholder="Add a new todo" 
    />hi</div>
      



    </template>


<script setup>
import { onDeactivated } from 'vue';

const addreference = ref([]);



</script>