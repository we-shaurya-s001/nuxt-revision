<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Our Products</h1>
      
      <NuxtLink 
        to="/cart" 
        class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
      >
        Go to Cart
      </NuxtLink>
    </div>

    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="i in 8" :key="i" class="h-64 bg-gray-100 animate-pulse rounded-xl"></div>
    </div>

    <div v-else-if="error" class="text-center py-10 text-red-500">
      Something went wrong while fetching products.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
      <CardComponent 
        v-for="(product, index) in data" 
        :key="product.id" 
        :product="product" 
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
// Note: price must be a 'ref' or it won't be reactive
const price = ref(100)

// No need to import CardComponent; Nuxt auto-imports components in the /components folder.
const { data, pending, error, refresh } = await useAsyncData(
  'products', 
  () => $fetch('https://fakestoreapi.com/products'), 
  { watch: [price] }
)
</script>