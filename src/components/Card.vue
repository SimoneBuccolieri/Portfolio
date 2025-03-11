<template>
  <component
      :is="project.link ? 'a' : 'div'"
      :href="project.link ? project.link : undefined"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-white rounded-xl border border-gray-200 overflow-hidden transition cursor-pointer hover:shadow-md block"
      @click="project.try ? $emit('openProject', project) : null"
  >
    <div :class="activeClass"></div>

    <div class="overflow-hidden w-full h-60 relative">
      <img :src="project.img" alt=""
           class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    </div>

    <div class="px-4 py-6">
      <h4 class="text-xl font-semibold">
        {{ project.title }}
      </h4>
      <p class="mt-2 text-gray-500">
        {{ project.description }}
      </p>

      <div class="mt-8 flex gap-x-8 gap-y-2 items-end justify-between flex-wrap">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 flex-grow 2xl:flex-grow-0">
          <Badge v-for="(lang, key) in project.langs" :key="key" :text="lang"/>
        </div>

        <div class="flex gap-2 flex-grow 2xl:flex-grow-0 justify-end">
          <!-- Link GitHub rimane separato e non clicca su tutta la card -->
          <a :href="project.linkGithub"
             target="_blank"
             rel="noopener noreferrer"
             class="cursor-pointer hover:scale-105 transform opacity-50 hover:opacity-100 transition"
             @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-5 w-5">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup>
import Badge from "@/components/Badge.vue";

const props = defineProps([
  'project',
  'style'
])

let primaryClasses = 'bg-gray-500 text-lg rounded w-50 h-30';
let secondaryClasses = 'bg-gray-500 text-lg rounded';

let activeClass = null;

if (props.style === 'primary') {
  activeClass = primaryClasses
} else if (props.style === 'secondary') {
  activeClass = secondaryClasses
}
</script>
