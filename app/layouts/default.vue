<template>
  <div class="flex flex-col min-h-screen ">
    
    <header class="bg-slate-400 ">
      <nav class="bg-grey-200">
        <ul class="flex flex-row justify-between p-6">
          <li class="font-bold">Personal Portfolio</li>
          <div class="flex gap-4">
             <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/projects">project</NuxtLink>

            <li>Onee</li>
          </div>
        </ul>
      </nav>
    </header>

    <main class="grow">
      <slot /> 
    </main>

    <footer class="bg-slate-800 text-white p-6 ">
    </footer>

  </div>
</template>             