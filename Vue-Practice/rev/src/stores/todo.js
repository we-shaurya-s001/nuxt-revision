import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    filter: 'all' 
  }),

  setters:{
    
  }

  getters: {
    completedTodos: (state) =>
      state.todos.filter(todo => todo.completed),

    activeTodos: (state) =>
      state.todos.filter(todo => !todo.completed),

    filteredTodos: (state) => {
      if (state.filter === 'active')
        return state.todos.filter(t => !t.completed)
      if (state.filter === 'completed')
        return state.todos.filter(t => t.completed)
      return state.todos
    },

    totalCount: (state) => state.todos.length,
    completedCount: (state) =>
      state.todos.filter(t => t.completed).length
  },

  actions: {
    addTodo(title) {
      this.todos.push({
        id: Date.now(),
        title,
        completed: false
      })
    },

    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
    },

    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },

    clearCompleted() {
      this.todos = this.todos.filter(t => !t.completed)
    },

    setFilter(filter) {
      this.filter = filter
    }
  }
})