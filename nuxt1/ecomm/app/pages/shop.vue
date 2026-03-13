<script setup>
const { addToCart, cart, totalPrice, removeFromCart } = useCart();

const {data:prod,error} = useFetch('https://fakestoreapi.com/products')

// const { data:prod, pending, error, refresh } = await useAsyncData(
//   'products', 
//   () => $fetch('https://fakestoreapi.com/products'), 
//   { watch: [price] }
// )
</script>

<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold">prod</h2>
    <div v-for="p in prod" :key="p.id" class="border p-4 my-2">
      {{ p.name }} - ${{ p.price }}
      <button @click="addToCart(p)" class="bg-green-500 text-white px-2 ml-4">
        Add to Cart
      </button>
    </div>

    <hr class="my-8" />

    <h2 class="text-2xl font-bold">Your Cart</h2>
    <div v-if="cart.length === 0">Cart is empty</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="flex justify-between w-64">
        <span>{{ item.name }} (x{{ item.quantity }})</span>
        <button @click="removeFromCart(item.id)" class="text-red-500 underline">Remove</button>
      </div>
      <p class="mt-4 font-bold">Total: ${{ totalPrice }}</p>
    </div>
  </div>
</template>