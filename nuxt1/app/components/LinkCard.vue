<script setup>
defineProps(['name', 'url', 'icon'])
</script>
<template>
  <a :href="url" target="_blank" class="flex items-center p-4 my-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700">
    <Icon :name="icon" class="text-2xl mr-4" />
    <div>nam</div>
    <span class="font-bold">{{ name }}</span>
  </a>
</template>