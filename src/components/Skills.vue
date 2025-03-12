<script setup>
import { ref } from "vue";
import Section from "@/components/Section.vue";

const skills = ref([
  { id: 1, name: "HTML", img: "/skills/html.svg" },
  { id: 2, name: "CSS", img: "/skills/css.svg" },
  { id: 3, name: "Js", img: "/skills/javascript.svg" },
  { id: 4, name: "PHP", img: "/skills/php.svg" },
  { id: 5, name: "MySQL", img: "/skills/mysql.svg" },
  { id: 6, name: "VueJs", img: "/skills/vuejs.svg" },
  { id: 7, name: "Tailwind", img: "/skills/tailwind.svg" },
  { id: 8, name: "Laravel", img: "/skills/laravel.svg" },
  { id: 9, name: "C", img: "/skills/c.svg" },
  { id: 10, name: "C++", img: "/skills/cpp.svg" }
]);
</script>

<template>
  <Section class="lg:pt-0!">
    <h2 class="text-2xl lg:hidden font-bold text-center">Competenze</h2>
    <div class="grid grid-cols-3 lg:grid-cols-5 gap-4 max-w-[60rem] w-full mx-auto mt-4 lg:mt-8">
      <div v-for="skill in skills" :key="skill.id" class=" flex flex-col items-center px-2 py-4 border border-gray-200 rounded-lg hover:shadow-md transition bg-white">
        <img :src="skill.img" :alt="skill.name" class="w-12 aspect-square object-contain">
        <p class="text-xs lg:text-base text-gray-500 mt-2">{{ skill.name }}</p>
      </div>
    </div>
  </Section>
</template>
