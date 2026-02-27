<template>
    <div>Fetching the data using the useAsyncData</div>
    <div v-for="photos in Images">
        <div>
            {{photos}}
        </div> -->
    </div>
    </template>

    <script setup>
const {data:Images,error,pending} = await useAsyncData('photos',()=>{
 return   $fetch('https://jsonplaceholder.typicode.com/photos')
})
</script>
