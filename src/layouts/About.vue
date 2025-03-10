<script setup>
import Badge from "@/components/Badge.vue";

const skills=[
    "Html","Php","JavaScript","CSS","Mysql","VueJs","Tailwind CSS","Laravel","C","C++"
];
</script>

<template>
<section id="about" class="container mx-auto px-8 py-14 md:py-24 lg:py-32">
  <div class="grid gap-10 md:grid-cols-2 items-center">
    <div class="flex justify-center">
      <div class="relative w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-blue-200">
        <div class="bg-[url(/fedev.jpg)] h-[300px] w-[300px] bg-cover"></div>

      </div>
    </div>
    <div class="mr-20">
      <h2 class="text-3xl font-bold md:text-4xl">
        About Me
      </h2>
      <p class="text-gray-500 mt-4 ">
        Sono uno sviluppatore software con una grande passione per la creazione di esperienze digitali moderne e performanti.
      </p>
      <p class="text-gray-500 mt-4 ">
        Amo trasformare idee in codice, progettando interfacce intuitive e funzionali. Sempre alla ricerca di nuove sfide, mi piace sperimentare con le tecnologie più innovative per sviluppare soluzioni efficienti e scalabili.
      </p>
      <div class="mt-8 ">
        <h3 class="text-xl font-bold">
          Skills
        </h3>
        <div class="flex flex-wrap gap-2 mt-4">
            <Badge v-for="(skill, key) in skills" :key="key" :text="skill"></Badge>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>
