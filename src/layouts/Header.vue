<template>
    <Section>
      <div class="text-center">

        <div>
          <h1 class="text-3xl font-bold sm:text-5xl md:text-6xl mb-4">
            Hi, I'm Simone Buccolieri
          </h1>
          <p class="mx-auto md:text-xl text-gray-500 mb-16">
            Web Developer and IT Student
          </p>
        </div>

        <div class="flex justify-center gap-2">
          <a href="#about" class="transition-all hover:scale-105 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-600 p-2 text-blue-100 hover:bg-blue-600/90 h-10 px-4 py-2">
            About
          </a>
          <a href="#projects" class="transition-all hover:scale-105 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white p-2 text-black border border-gray-200 h-10 px-4 py-2">
            View My Work
          </a>
        </div>

      </div>
    </Section>
</template>

<script setup lang="ts">
import Section from "@/components/Section.vue";
</script>
