<template>
  <div class="p-8 max-w-4xl mx-auto">
    <div v-if="project">
      <NuxtLink to="/" class="text-blue-500 hover:underline mb-4 block">
        ← Back to Projects
      </NuxtLink>

      <h1 class="text-4xl font-bold mb-4">{{ project.name }}</h1>
      <p class="text-xl text-gray-700 mb-6">{{ project.description }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-6">
        <div>
          <h3 class="font-bold text-lg mb-2">Details</h3>
          <p><strong>Status:</strong> {{ project.status }}</p>
          <p><strong>Client:</strong> {{ project.client }}</p>
          <p><strong>Budget:</strong> ${{ project.budget.toLocaleString() }}</p>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">Technologies</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold">Project not found 🔍</h2>
      <NuxtLink to="/" class="text-blue-500 underline mt-4 block">Return to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 1. Get access to the current route (URL)
const route = useRoute()

// 2. Your project data (In a real app, this might be imported from a central file)
const myprojects = [
  { id: 1, name: "E-Commerce Website", description: "A full-stack online store...", technologies: ["Vue.js", "Node.js"], status: "Completed", client: "RetailCorp", budget: 12000 },
  { id: 2, name: "Task Management App", description: "Kanban-style productivity...", technologies: ["Vue.js", "Firebase"], status: "In Progress", client: "Internal", budget: 5000 },
  // ... include your other projects here ...
]

// 3. Find the specific project based on the ID in the URL
// We use Number() because route.params.id is always a string
const project = myprojects.find(p => p.id === Number(route.params.id))
</script>