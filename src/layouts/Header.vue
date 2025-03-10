<template>
  <section class="container mx-auto px-8 py-12 md:py-24 lg:py-32">
    <div class="text-center">

      <div>
        <h1 class="text-3xl font-bold sm:text-5xl md:text-6xl mb-4">
          Hi, I'm Simone Buccolieri
        </h1>
        <p class="mx-auto md:text-xl text-gray-500 mb-16">
          Web Developer and IT Student
        </p>
      </div>

      <div class="flex justify-center flex-col gap-2 min-[400px]:flex-row mb-4">
        <a href="#about" class="transition-all hover:scale-105 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-600 p-2 text-blue-100 hover:bg-blue-600/90 h-10 px-4 py-2">
          About
        </a>
        <a href="#contact" class="transition-all hover:scale-105 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white p-2 text-black hover:bg-gray-100/90 border border-gray-200 h-10 px-4 py-2">
          View My Work
        </a>
      </div>
      <div class="flex flex-col justify-center mt-16 ">
        <Skills />
      </div>




    </div>
  </section>
</template>

<script setup lang="ts">
import Skills from "@/components/Skills.vue";
</script>
