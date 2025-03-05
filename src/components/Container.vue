<template>
  <section class="container mx-auto px-[2rem] py-12 md:py-24 lg:py-32">
    <div class="flex flex-col items-center gap-4 text-center">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold sm:text-5xl md:text-6xl">
          Hi, I'm Simone Buccolieri
        </h1>
        <p class="mx-auto max-w-[700px] md:text-xl text-gray-500">
          Web Developer and IT Student
        </p>
      </div>
      <div class="flex flex-col gap-2 min-[400px]:flex-row">
        <a href="#about" class="transition-all hover:scale-110 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-600 p-2 text-blue-100 hover:bg-blue-600/90 h-10 px-4 py-2">
          About
        </a>
        <a href="#contact" class="transition-all hover:scale-110 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white p-2 text-black hover:bg-gray-100/90 border border-gray-200 h-10 px-4 py-2">
          View My Work
        </a>
      </div>
      <div class="relative mt-14 flex w-10 h-16 animate-bounce items-center justify-center rounded-full bg-white p-1 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20 border border-gray-300">
        <!-- Icona animata -->
        <svg class="size-6 text-blue-600 animate-bounce" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>