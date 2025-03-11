<script setup>
import {ref} from "vue";
import Snake from "@/projects/Snake.vue";
import Memory from "@/projects/Memory.vue";
import Card from "@/components/Card.vue";

import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Section from "@/components/Section.vue";

const selectedProject = ref(null);
const projects = [
  {
    id: 1,
    img: "/snakepreview.jpg",
    title: "Snake",
    try: true,
    description: "Snake ricreato in VueJs",
    linkGithub: "https://github.com/simonebuccolieri/snake",
    linkname: "Github",
    component: Snake,
    langs: [
      "Html", "CSS", "VueJS"
    ]
  },
  {
    id: 2,
    img: "/calendarpreview.jpg",
    title: "Agenda",
    description: "Agenda web personale, con autenticazione",
    linkGithub: "https://github.com/simonebuccolieri/calendar",
    linkname: "Github",
    link: "https://calendar.simonebuccolieri.com",
    langs: [
      "Html", "CSS", "Laravel", "MySql", "Npm"
    ]
  },
  {
    id: 3,
    img: "/memorypreview.png",
    title: "Memory",
    try:true,
    description: "Memory ricreato in VueJs",
    linkGithub: "https://github.com/simonebuccolieri/Memory",
    linkname: "Github",
    component: Memory,
    langs: [
      "Html", "CSS", "VueJS"
    ]
  },
  {
    id: 4,
    img: "",
    title: "Altra Roba",
    description: "Da Aggiungere",
    linkGithub: "https://github.com/ecommerce",
    linkname: "Link"
  },
];
const openProject = (project) => {
  selectedProject.value = project.component;
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  selectedProject.value = null;
  document.body.style.overflow = '';

};
</script>

<template>
  <Section id="projects">
    <h2 class="text-3xl font-bold md:text-4xl text-center">
      Projects
    </h2>

    <swiper
        class="lg:mt-16 mt-8"
        :modules="[Navigation, Pagination, Autoplay]"
        slides-per-view="1"
        space-between="20"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
    >
      <swiper-slide
          v-for="project in projects"
          :key="project.id"
          class="flex flex-col justify-center items-center rounded-lg "
      >
        <Card :project="project" @openProject="openProject"></Card>
      </swiper-slide>
    </swiper>
    <!-- Modale per il gioco -->
    <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <button @click="closeProject" class="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl">✖</button>

        <component :is="selectedProject"></component>
      </div>
    </div>

  </Section>
</template>

<style scoped>

</style>
