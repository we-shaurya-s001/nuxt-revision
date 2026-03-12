<script setup>
import { ssrContextKey } from 'vue';

const { data: Product, pending } = await useLazyFetch('https://httpbin.org/delay/3');
</script>

<template>
  <div>
    <h1>In use fetch, no pending state goes on when populated, wheras in usealazyfetch it takes pending state</h1>
    
    <div v-if="pending">
      ⏳ Sabar karo... Products aa rahe hain...
    </div>

    <div v-else>
      <pre>{{ Product }}</pre>
    </div>
  </div>
</template>
