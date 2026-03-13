interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCart = () => {
  const cart = useState<Product[]>('cart', () => []);

  const totalItems = computed(() => 
    cart.value.reduce((acc, item) => acc + item.quantity, 0)
  );

  const totalPrice = computed(() => 
    cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  );


  const addToCart = (product: Omit<Product, 'quantity'>) => {
    const existingItem = cart.value.find(item => item.id === product.id);
    if (existingItem) { 
      existingItem.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter(item => item.id !== id);
  };

  return {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart
  };
};