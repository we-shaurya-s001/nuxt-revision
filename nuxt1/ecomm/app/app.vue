<template>
  <div>
    <Navbar/>
    <NuxtPage/>
    <NuxtLayout/>
  </div>
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