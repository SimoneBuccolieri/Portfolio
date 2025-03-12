<template>
  <header class="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur ">
    <div class="container mx-auto px-8 flex h-14 items items-center justify-between py-4">
      <div class="flex gap-6 md:gap-10">
        <a href="#" class="flex items-center space-x-2">
          <img src="/logo.png" alt="" class="h-12 w-12">
        </a>
        <nav class="hidden gap-6 md:flex">
          <button @click="$scrollTo('#projects', 500, { easing: 'ease-in-out' })" class="h-14 border-b border-gray-500 hover:border-b-2 flex items-center text-lg font-medium transition-colors text-gray-500 hover:text-gray-800">Progetti</button>
          <button @click="$scrollTo('#about', 500, { easing: 'ease-in-out' })" class="h-14 border-b border-gray-500 hover:border-b-2 flex items-center text-lg font-medium transition-colors text-gray-500 hover:text-gray-800">Chi Sono</button>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <div class="hidden md:flex gap-2">
          <a href="https://github.com/SimoneBuccolieri">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/simone-buccolieri-5b78001b9/">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </button>
          </a>
        </div>
        <button @click="toggleMenu" class="md:hidden inline-flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>
  <div v-if="menuOpen" class="fixed inset-0 z-50 bg-black/50 ">
    <div class="fixed gap-4 bg-white p-6 shadow-lg inset-y-0 top-0 h-1/4 w-full border-b border-gray-100 ">
      <div class="flex flex-col gap-6 h-full justify-center">
        <button @click="$scrollTo('#projects', 500, { easing: 'ease-in-out' });toggleMenu()" class="text-lg font-medium">Progetti</button>
        <button @click="$scrollTo('#about', 500, { easing: 'ease-in-out' });toggleMenu()" class="text-lg font-medium" >Chi Sono</button>
      </div>
      <button @click="toggleMenu" class="absolute right-8 top-4 rounded-sm opacity-">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>
      <button @click="toggleMenu" class="absolute left-8 top-4 rounded-sm font-bold">
        SB
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
