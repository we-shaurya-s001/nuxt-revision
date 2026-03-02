<template>
    <div>
       
        <button  v-once v-on:click="increasecounter">            {{ count  }}
</button>
       
<h1 >
    Event Handling
</h1>
    </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const htmlleramera = '<h1>THis is my html head</h1>'




const increasecounter = () =>{
   count.value++
}

</script>