<script setup>
import { ref } from "vue";
import Snake from "@/components/Projects/Snake.vue";
const selectedProject = ref(null);
const projects = [
  { id: 1, img: "/fedev.jpg", title: "Snake", description: "Snake ricreato in VueJs", link: "https://github.com/simonebuccolieri", linkname:"Github",component: Snake,
    langs: [
        "Html", "CSS", "VueJS"
    ]},
  { id: 2, img: "/fedev.jpg", title: "Altra Roba", description: "Da Aggiungere", link: "https://github.com/ecommerce", linkname:"Link" },
  { id: 3, img: "/fedev.jpg", title: "Altra Roba", description: "Da Aggiungere", link: "https://github.com/ecommerce", linkname:"Link" },
];
const openProject = (project) => {
  selectedProject.value = project.component;
};

const closeProject = () => {
  selectedProject.value = null;
};
</script>

<template>
<section id="projects" class="container mx-auto px-[2rem] py-14 md:py-24 lg:py-32 bg-gray-50">
  <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
    <h2 class="text-3xl font-bold md:text-4xl">
      Projects
    </h2>
    <p class="max-w-[85%] text-gray-500 md:text-xl">
      Alcuni Progetti Recenti
    </p>
  </div>
  <div class="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem] lg:max-w-6xl my-8 ">
    <div v-for="project in projects" :key="project.id" class="duration-300 hover:scale-105 rounded-lg border border-gray-300 bg-gray-50 shadow-sm overflow-hidden ">
      <div class="relative overflow-hidden">
        <img :src="project.img" alt="" class="h-full w-full ">
      </div>
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-bold">
          {{ project.title }}
        </h3>
        <p class="text-sm text-gray-500">
          {{ project.description }}
        </p>
      </div>
      <div class="p-6 pt-0">
        <div class="flex flex-wrap gap-2">
          <div v-for="lang in project.langs" class="inline-flex items-center rounded-full border-solid px-2.5 py-0.5 text-xs font-bold bg-gray-200 select-none">
            {{ lang }}
          </div>
        </div>
      </div>
      <div class="items-center p-6 pt-0 flex gap-2">
        <a :href="project.link" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white hover:bg-blue-600 hover:text-blue-100 h-9 rounded-md px-3 gap-1 border border-gray-300">
          {{ project.linkname }}
        </a>
        <button v-if="project.component" @click="openProject(project)"
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white hover:bg-blue-600 hover:text-blue-100 h-9 rounded-md px-3 gap-1 border border-gray-300 cursor-pointer">
          Prova
        </button>
      </div>
    </div>
  </div>
  <!-- Modale per il gioco -->
  <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <button @click="closeProject" class="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl">✖</button>

      <component :is="selectedProject"></component>
    </div>
  </div>

</section>
</template>

<style scoped>

</style>