<script setup>
import { ref } from "vue";
import Section from "@/components/Section.vue";

const skills = ref([
  { id: 1, name: "HTML", img: "/skills/html.svg" },
  { id: 2, name: "CSS", img: "/skills/css.svg" },
  { id: 3, name: "Js", img: "/skills/javascript.svg" },
  { id: 4, name: "PHP", img: "/skills/php.svg" },
  { id: 5, name: "MySQL", img: "/skills/mysql.svg" },
  { id: 6, name: "SQL Server", img: "/skills/sqlserver.svg" },
  { id: 7, name: "VueJs", img: "/skills/vuejs.svg" },
  { id: 8, name: "Tailwind", img: "/skills/tailwind.svg" },
  { id: 9, name: "C#", img: "/skills/csharp.svg" },
  { id: 10, name: "C", img: "/skills/c.svg" },
  { id: 11, name: "C++", img: "/skills/cpp.svg" },
  { id: 12, name: "Docker", img: "/skills/docker.svg" },
  { id: 13, name: "WordPress", img: "/skills/wordpress.svg" }
]);
</script>

<template>
  <Section class="lg:pt-0! mb-12">
    <div class="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold md:text-4xl mb-8">
        Competenze Tecniche
      </h2>
      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.id" 
          class="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-full hover:shadow-md hover:-translate-y-1 transition-all cursor-default"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
        >
          <img :src="skill.img" :alt="skill.name" class="w-6 h-6 object-contain">
          <span class="text-sm md:text-base font-medium text-gray-700">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </Section>
</template>
