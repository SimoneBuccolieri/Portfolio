<script setup lang="ts">
import { ref, inject } from "vue";

const isDark = inject('isDark');
const toggleDark = inject('toggleDark');
const menuOpen = ref(false);
const toggleMenu = () => { menuOpen.value = !menuOpen.value; };
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b transition-all duration-300"
    style="background: color-mix(in srgb, var(--bg-primary) 80%, transparent); border-color: var(--border); backdrop-filter: blur(16px);"
  >
    <div class="max-w-6xl mx-auto px-6 flex h-16 items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <img src="/logo.png" alt="Logo Simone Buccolieri" class="h-9 w-9 rounded-lg transition-transform group-hover:scale-110" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1">
        <button
          v-for="item in [['#education','Formazione'],['#experience','Lavoro'],['#about','Chi Sono']]"
          :key="item[0]"
          @click="$scrollTo(item[0], 600, { easing: 'ease-in-out' })"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-brand-500/10 hover:text-brand-500"
          style="color: var(--text-muted);"
        >
          {{ item[1] }}
        </button>
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          @click="toggleDark"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          style="background: var(--bg-card); border: 1px solid var(--border);"
          :aria-label="isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro'"
        >
          <!-- Sun -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <!-- Moon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>

        <!-- Social links (desktop) -->
        <div class="hidden md:flex items-center gap-2">
          <a href="https://github.com/SimoneBuccolieri" aria-label="GitHub" target="_blank"
            class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-brand-500"
            style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/simone-buccolieri" aria-label="LinkedIn" target="_blank"
            class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-brand-500"
            style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button @click="toggleMenu" class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted);">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <div v-if="menuOpen" class="md:hidden border-t px-6 py-4 flex flex-col gap-2" style="background: var(--bg-primary); border-color: var(--border);">
        <button
          v-for="item in [['#education','Formazione'],['#experience','Lavoro'],['#about','Chi Sono']]"
          :key="item[0]"
          @click="$scrollTo(item[0], 600, { easing: 'ease-in-out' }); toggleMenu()"
          class="text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-brand-500/10 hover:text-brand-500"
          style="color: var(--text-muted);"
        >
          {{ item[1] }}
        </button>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
