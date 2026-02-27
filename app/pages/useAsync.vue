<template>
<div>
    <div>
       <Componentcard/>

    </div>
    <div v-for="image in Images" :key="image.id">
  <img :src="image.url" :alt="image.title" />
</div>      
</div>

    </template>

    <script setup>
    import Componentcard from '~/components/componentcard.vue';
    const { data: Images } = await useAsyncData('photos', async () => {
    
        

    const rawData = await $fetch('https://jsonplaceholder.typicode.com/photos')
    
    return rawData.map(photo => ({
        id: photo.id,
        title: photo.title,
        url: photo.thumbnailUrl
    })).slice(0, 10) 
})  
</script>
