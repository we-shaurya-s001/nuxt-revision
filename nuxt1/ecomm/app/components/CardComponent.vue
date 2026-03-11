<template>
  <NuxtLink :to="`/products/${product.id}`" class="group block h-full">
    <div class="border rounded-xl p-4 h-full bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      <div class="h-48 w-full flex justify-center items-center overflow-hidden mb-4">
        <img 
          :src="product.image" 
          :alt="product.title"
          class="h-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div class="">

      </div>


      <div>
      </div>


       <div class="text-[10px] uppercase text-gray-400 mb-1">
        {{ product.category }}
      </div>

      <h3 class="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
        {{ product.title }}
      </h3>
  
  <div class="mt-auto flex justify-between items-end">
        <div>
          <span class="text-xs text-gray-400 block italic">ID: {{ product.id }}</span>
          <span class="text-lg font-bold text-gray-900">${{ product.price }}</span>
        </div>
        
        <div class="text-xs bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-medium">
          ★ {{ product.rating?.rate }}
        </div>
      </div>
      
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  },
  index: {
    type: Number
  }
})
</script>