<script setup>
import Navbar from './components/Navbar.vue';
import Transactioncomp from './components/transactioncomp.vue';
import HomeView from './components/HomeView.vue';

</script>
<template>
    <Navbar/>
   <main>
    <RouterView /> </main>
   <h1 class="text-3xl font-bold text-red-500">
  Tailwind Working
</h1>
 <Transactioncomp/>
</template>
