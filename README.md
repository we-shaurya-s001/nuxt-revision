]

The Challenge: "The Nuxt Dev Portfolio"
Goal: Build a mini-portfolio that displays project categories and specific project details.
//done
phase 2: setup and define the configuration
Phase 1: Setup & Configuration (Chapters 1 & 4)
Initialize: Create a new Nuxt project using the CLI (nuxi).
//done
Tailwind: Install the @nuxtjs/tailwindcss module.
//done
Config: In tailwind.config.js, add a custom primary color (e.g., brand: '#34d399').
// See again
Global CSS: Create an assets/css/main.css file, add a Google Font import, and ensure it's linked in nuxt.config.ts.
sere again  //done
Phase 2: Structural Architecture (Chapter 4)
Default Layout: Create a layouts/default.vue. It must contain:
//done
A Navigation bar with <NuxtLink> to "Home" and "Projects".
//done

A <slot /> for page content.
//done

A Footer that stays at the bottom.
//done

Custom Layout: Create a layouts/admin.vue. This should have a sidebar instead of a top nav.
//done

Phase 3: Routing & Pages (Chapters 2 & 3)
Home Page (pages/index.vue): * Add a Hero section using Tailwind classes.
//doee
Display an image stored in assets/ (processed by Vite).

Project Listing (pages/projects/index.vue):

Create a list of 3 dummy projects (e.g., "Web App", "Mobile App", "Design").

Link each one to a dynamic route using <NuxtLink :to="'/projects/' + project.slug">.

Dynamic Project Page (pages/projects/[id].vue):

Extract the id from the URL using useRoute().

Display: "Viewing details for project: {{ route.params.id }}".

The Master Touch: Use definePageMeta to assign the "admin" layout to one specific project ID only.

Phase 4: The "Pro" Validation (The Final Test)
Once you've built it, check your work against these Mastery Requirements:

Optimization: When you navigate between Home and Projects, does the page refresh? (It shouldn't if you used NuxtLink).

Asset Handling: Did you use the ~/assets alias for your images?

Tailwind JIT: Can you use your custom brand color in a class like text-brand?

Route Validation: Can you add a middleware or a simple check to redirect the user to a 404 page if route.params.id is a number instead of a string? (Optional/Advanced).