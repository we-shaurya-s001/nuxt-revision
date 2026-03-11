<script setup>
import { storeToRefs } from 'pinia';

// Nuxt will automatically find useCartStore() if the file is in /stores
const cartStore = useCartStore(); 
const { cartItemCount, cartTotalPrice, items } = storeToRefs(cartStore);

const handleAddToCart = (product) => {
  cartStore.addProduct(product);
};
</script>

<p>Total items: {{ items.length }}</p>
<p>Total price: ${{ cartTotalPrice.toFixed(2) }}</p>

<p v-if="items">Total items: {{ items?.length || 0 }}</p>
<p v-if="cartTotalPrice !== undefined">
  Total price: ${{ cartTotalPrice?.toFixed?.(2) || '0.00' }}
</p>