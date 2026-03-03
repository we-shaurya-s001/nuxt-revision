<template>
  <div class="container">
    <h1>Vue 3 To-Do List</h1>

    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      type="text"
      placeholder="Add a new todo"
    />

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />

        <span :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>

        <button @click="removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  if (newTodo.value.trim() === '') return

  todos.value.push({
    id: Date.now(),
    text: newTodo.value.trim(),
    completed: false
  })

  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>
