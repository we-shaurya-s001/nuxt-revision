<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
    <div v-for="project in myprojects" :key="project.id" class="w-60 h-60 border-2">
      {{ project.name }}
      <h2>{{ project.description }}</h2>
     <NuxtLink 
      v-for="project in myprojects" 
      :key="project.id" 
      :to="'/projects/' + project.id"
      class="w-60 h-60 border-2 block p-4 hover:bg-gray-50 transition"
    >
      <h2 class="font-bold">{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const myprojects = [
  {
    id: 1,
    name: "E-Commerce Website",
    description: "A full-stack online store with cart, payments, and admin dashboard.",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Stripe"],
    status: "Completed",
    startDate: "2024-01-10",
    endDate: "2024-03-22",
    teamSize: 4,
    client: "RetailCorp",
    budget: 12000,
    github: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Kanban-style productivity app with drag-and-drop and notifications.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS"],
    status: "In Progress",
    startDate: "2024-04-05",
    endDate: null,
    teamSize: 2,
    client: "Internal",
    budget: 5000,
    github: "https://github.com/example/taskmanager",
    demo: null,
    featured: true
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Personal developer portfolio with blog and project showcase.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    status: "Completed",
    startDate: "2023-11-01",
    endDate: "2023-11-20",
    teamSize: 1,
    client: "Self",
    budget: 0,
    github: "https://github.com/example/portfolio",
    demo: "https://portfolio-demo.com",
    featured: false
  },
  {
    id: 4,
    name: "Chat Application",
    description: "Real-time chat app with authentication and group messaging.",
    technologies: ["Vue.js", "Socket.io", "Node.js", "MongoDB"],
    status: "Planned",
    startDate: "2024-06-01",
    endDate: null,
    teamSize: 3,
    client: "StartupX",
    budget: 8000,
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 5,
    name: "Inventory Management System",
    description: "Warehouse inventory tracking with barcode scanning support.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "Completed",
    startDate: "2023-06-15",
    endDate: "2023-09-10",
    teamSize: 5,
    client: "LogiStore",
    budget: 18000,
    github: null,
    demo: "https://inventory-demo.com",
    featured: true
  },
  {
    id: 6,
    name: "Fitness Tracking App",
    description: "Mobile app for workout tracking and nutrition logging.",
    technologies: ["Flutter", "Firebase"],
    status: "In Progress",
    startDate: "2024-02-12",
    endDate: null,
    teamSize: 3,
    client: "FitLife",
    budget: 15000,
    github: "https://github.com/example/fitapp",
    demo: null,
    featured: false
  },
  {
    id: 7,
    name: "Online Learning Platform",
    description: "Course platform with video streaming and quizzes.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    status: "Completed",
    startDate: "2023-01-10",
    endDate: "2023-05-30",
    teamSize: 6,
    client: "EduWorld",
    budget: 25000,
    github: null,
    demo: "https://learning-demo.com",
    featured: true
  },
  {
    id: 8,
    name: "Restaurant Booking System",
    description: "Reservation system with real-time availability updates.",
    technologies: ["Angular", "Node.js", "MongoDB"],
    status: "Completed",
    startDate: "2023-08-01",
    endDate: "2023-10-15",
    teamSize: 4,
    client: "DineEasy",
    budget: 10000,
    github: null,
    demo: "https://restaurant-demo.com",
    featured: false
  }
]
</script>