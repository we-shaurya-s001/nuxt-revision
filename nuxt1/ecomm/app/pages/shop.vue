<script setup>
const { addToCart, cart, totalPrice, removeFromCart } = useCart();

const {data:prod,error} = useFetch('https://fakestoreapi.com/products')


// "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120

</script>
// "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120

<template>
     <div class="flex flex-row">
  <div class="m-10">
        <h2 class="text-2xl font-bold">prod</h2>

    <div>

    </div>

    <div v-for="p in prod" :key="p.id" class="border w-4/5 p-4 my-2">
      <div class="flex flex-row" ><div><img :src="p.image" :alt="p.alt" class="h-60 w-40"/></div>    
      <div class="flex flex-col">
      <div class="m-5"> Rating ${{ p.rating.rate }}</div> 
      <div class="m-5"> Title ${{ p.title }}</div> 
      <div class="m-5">Price ${{ p.price }} </div>

      </div> 
    
    
    
    
    
    </div>
     

      <button @click="addToCart(p)" class="bg-green-500 text-white px-2 ml-80">
        Add to Cart
      </button>
    </div>

    <hr class="my-8" />

  </div>


<div>
      <h2 class="text-2xl font-bold m-10">Your Cart</h2>
    <div v-if="cart.length === 0">Cart is empty</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="flex justify-between w-64">
        <img :src="item.id"/>
        <span>{{ item.title }} (x{{ item.quantity }})</span>
        <button @click="removeFromCart(item.id)" class="text-red-500 underline">Remove</button>
      </div>
      <p class="mt-4 font-bold">Total: ${{ totalPrice }}</p>
    </div>
  </div>

</div>
</template>