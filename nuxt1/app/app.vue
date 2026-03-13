<!-- <script setup>
// useFetch is globally available in Nuxt 3/4
const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <NuxtLayout/>

  <div>
    <h1>Fake Store Products</h1>

    <div v-if="pending">Loading products...</div>

    <div v-else-if="error">
      <p>Error fetching data: {{ error.statusMessage }}</p>
    </div>

    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="card">
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
  
  
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}
.card img {
  max-width: 100px;
  height: auto;
}

</style> -->

<template>
  <NuxtLayout/>
  
  <NuxtPage/>
</template>

<script setup lang="ts">
const { cart } = useCart();

// Load cart from localStorage on startup
onMounted(() => {
  const savedCart = localStorage.getItem('cart_data');
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
});

// Watch the cart and save changes to localStorage
watch(cart, (newCart) => {
  localStorage.setItem('cart_data', JSON.stringify(newCart));
}, { deep: true });
</script>