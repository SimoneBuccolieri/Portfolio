<script setup>
import { ref } from "vue";

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
  <div class="grid grid-cols-5 gap-4 p-6">
    <div v-for="skill in skills" :key="skill.id" class=" flex flex-col items-center p-4 border border-gray-200  rounded-lg shadow hover:shadow-md transition">
      <img :src="skill.img" :alt="skill.name" class="w-16 aspect-square   object-contain ">
      <p class="text-xs md:text-lg md:font-semibold text-gray-500 pt-1">{{ skill.name }}</p>
    </div>
  </div>
</template>
