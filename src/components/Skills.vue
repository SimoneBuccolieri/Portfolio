<script setup>
import { ref } from "vue";
import Section from "@/components/Section.vue";

const skills = ref([
  { id: 1,  name: "HTML",       img: "/skills/html.svg" },
  { id: 2,  name: "CSS",        img: "/skills/css.svg" },
  { id: 3,  name: "JavaScript", img: "/skills/javascript.svg" },
  { id: 4,  name: "PHP",        img: "/skills/php.svg" },
  { id: 5,  name: "MySQL",      img: "/skills/mysql.svg" },
  { id: 6,  name: "SQL Server", img: "/skills/sqlserver.svg" },
  { id: 7,  name: "Vue.js",     img: "/skills/vuejs.svg" },
  { id: 8,  name: "Tailwind",   img: "/skills/tailwind.svg" },
  { id: 9,  name: "C#",         img: "/skills/csharp.svg" },
  { id: 10, name: "C",          img: "/skills/c.svg" },
  { id: 11, name: "C++",        img: "/skills/cpp.svg" },
  { id: 12, name: "Docker",     img: "/skills/docker.svg" },
  { id: 13, name: "WordPress",  img: "/skills/wordpress.svg" },
]);
</script>

<template>
  <Section class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
      <p class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: #8b5cf6;">Stack Tecnologico</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-2 section-title" style="color: var(--text-primary);">
        Competenze Tecniche
      </h2>
      <p class="mb-12 text-base" style="color: var(--text-muted);">Le tecnologie con cui costruisco soluzioni ogni giorno.</p>

      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="(skill, index) in skills"
          :key="skill.id"
          class="skill-pill flex items-center gap-2.5 px-5 py-2.5 cursor-default"
          data-aos="zoom-in"
          :data-aos-delay="index * 40"
        >
          <img :src="skill.img" :alt="skill.name" class="w-5 h-5 object-contain" />
          <span class="text-sm font-medium" style="color: var(--text-primary);">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </Section>
</template>
