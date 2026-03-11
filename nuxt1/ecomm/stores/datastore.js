import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),


  getters: {
    cartItemCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    },

    cartTotalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },

 actions: {

    addProduct(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },


    removeProduct(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    },


    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },

        decreaseQuantity(productId) {
      const itemIndex = this.items.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        if (this.items[itemIndex].quantity > 1) {
          this.items[itemIndex].quantity--;
        } else {
          this.items.splice(itemIndex, 1);
        }
      }
    },

    // Clear the entire cart
    clearCart() {
      this.items = [];
    }
  },
});
