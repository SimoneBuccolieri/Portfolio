<script setup>
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";

const skills = ref([
  {id: 1, name: "HTML", img: "/skills/html.svg"},
  {id: 2, name: "CSS", img: "/skills/css.svg"},
  {id: 3, name: "JavaScript", img: "/skills/javascript.svg"},
  {id: 4, name: "PHP", img: "/skills/php.svg"},
  {id: 5, name: "MySQL", img: "/skills/mysql.svg"},
  {id: 6, name: "VueJs", img: "/skills/vuejs.svg"},
  {id: 7, name: "Tailwind", img: "/skills/tailwind.svg"},
  {id: 8, name: "Laravel", img: "/skills/laravel.svg"},
  {id: 9, name: "C", img: "/skills/c.svg"},
  {id: 10, name: "C++", img: "/skills/cpp.svg"},
]);
</script>

<template>
  <h2 class="text-3xl font-bold md:text-4xl text-center">
    Skills
  </h2>
  <swiper
      class="p-6 w-3/4"
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="3"
      :space-between="20"
      :breakpoints="{
      640: { slidesPerView: 4, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 40 }
    }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :loop="true"
  >
    <swiper-slide
        v-for="skill in skills"
        :key="skill.id"
        class="flex flex-col justify-center items-center p-2  rounded-lg hover:shadow-md transition"
    >
      <img :src="skill.img" :alt="skill.name" class="h-16 md:h-32 object-contain mb-3"/>
      <p class="text-xs md:text-lg md:font-semibold text-gray-500 p-1">{{ skill.name }}</p>
    </swiper-slide>
  </swiper>
</template>

