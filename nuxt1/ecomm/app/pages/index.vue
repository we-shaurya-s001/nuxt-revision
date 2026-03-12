<template>
  <div class="flex items-center justify-center mt-50 font-bold flex-col">

    <h1 class="text-2xl mb-6">Welcome Back</h1>

    <form @submit.prevent="login" class="flex flex-col w-80">

      <label>Email</label>
      <input
        v-model="email"
        type="email"
        placeholder="enter mail"
        class="text-gray-500 m-2 rounded p-2 border"
      />

      

      <label>Password</label>
    
      <input
        v-model="password"
        type="password"
        placeholder="enter password"
        class="text-gray-500 m-2 rounded p-2 border"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Login
      </button>

    </form>

  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")

const login = () => {
  if (!email.value || !password.value) {
    alert("Please enter email and password")
    return
  }

  console.log("Email:", email.value)
  console.log("Password:", password.value)

  // Example API call
  /*
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  */
}
</script>