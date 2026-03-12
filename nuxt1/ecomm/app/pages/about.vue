<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
    <!-- Header Section -->
    <div class="max-w-3xl text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p class="text-lg text-gray-600">
        Welcome to our e-commerce store! We are committed to providing high-quality products and an excellent shopping experience.
      </p>
    </div>

    <!-- Features Section -->
    <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl w-full">
      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Quality Products</h2>
        <p class="text-gray-600">
          We carefully select our products to ensure top quality and reliability.
        </p>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Fast Shipping</h2>
        <p class="text-gray-600">
          Enjoy quick and safe delivery on all orders, right to your doorstep.
        </p>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
        <h2 class="text-2xl font-semibold mb-2 text-gray-800">Customer Support</h2>
        <p class="text-gray-600">
          Our support team is here 24/7 to help with any questions or concerns.
        </p>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-12 text-center">
      <p class="text-gray-700 mb-4">Ready to start shopping with us?</p>
      <NuxtLink to="/" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
        Go to Store
      </NuxtLink>
    </div>
  </div>
</template>