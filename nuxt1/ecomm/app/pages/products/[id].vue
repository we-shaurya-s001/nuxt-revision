<template>
  <div class="max-w-7xl mx-auto p-6">
    <NuxtLink to="/" class="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors">
      <span>&larr;</span> Back to Products
    </NuxtLink>

    <div v-if="pending" class="flex flex-col md:flex-row gap-12 animate-pulse">
      <div class="w-full md:w-1/2 h-96 bg-gray-200 rounded-2xl"></div>
      <div class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 w-3/4"></div>
        <div class="h-4 bg-gray-200 w-1/2"></div>
        <div class="h-24 bg-gray-200"></div>
      </div>
    </div>
    <div v-else-if="error || !product" class="text-center py-20">
      <h2 class="text-2xl font-bold">Product not found</h2>
      <p class="text-gray-500">The product you are looking for doesn't exist.</p>
      <NuxtLink to="/" class="mt-4 inline-block bg-black text-white px-6 py-2 rounded-lg">Go Home</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      <div class="bg-white p-8 rounded-3xl border border-gray-100 flex justify-center shadow-sm">
        <img 
          :src="product.image" 
          :alt="product.title" 
          class="max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-500" 
        />
      </div>

      <div class="flex flex-col">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
          {{ product.category }}
        </span>
        <h1 class="text-4xl font-extrabold text-gray-900 leading-tight">
          {{ product.title }}
        </h1>
        
        <div class="flex items-center gap-4 mt-4">
          <span class="text-3xl font-bold text-gray-900">${{ product.price }}</span>
          <div v-if="product.rating" class="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded text-yellow-700 text-sm font-bold">
            ★ {{ product.rating.rate }} 
1           </div>
        </div>

        <p class="mt-8 text-gray-600 leading-relaxed text-lg">
          {{ product.description }}
        </p>

        <div class="mt-10 flex gap-4">
          <button class="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
            Add to Cart
          </button>
          <button class="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            ♥
          </button>
        </div>
<div>
  
</div>
        <div class="mt-8 border-t border-gray-100 pt-8 grid grid-cols-2 gap-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const productId = route.params.id

const { data: product, pending, error } = await useAsyncData(
  `product-detail-${productId}`,
  () => $fetch(`https://fakestoreapi.com/products/${productId}`),
  {
    pick: ['title', 'price', 'description', 'category', 'image', 'rating']
  }
)


useHead({
  title: product.value ? `${product.value.title} | Nuxt Store` : 'Loading Product...'
})
</script>