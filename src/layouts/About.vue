<script setup>
import Section from "@/components/Section.vue";

</script>

<template>
<Section>
  <div class="grid gap-10 md:grid-cols-2 items-center">
    <div class="flex justify-center">
      <div class="relative w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-blue-200">
        <div class="bg-white h-[300px] w-[300px] bg-cover"></div>

      </div>
    </div>
    <div class="max-w-[30rem]">
      <h2 class="text-3xl font-bold md:text-4xl">
        About Me
      </h2>
      <p class="text-gray-500 mt-4 ">
        Sono uno sviluppatore software con una grande passione per la creazione di esperienze digitali moderne e performanti.
      </p>
      <p class="text-gray-500 mt-4 ">
        Amo trasformare idee in codice, progettando interfacce intuitive e funzionali. Sempre alla ricerca di nuove sfide, mi piace sperimentare con le tecnologie più innovative per sviluppare soluzioni efficienti e scalabili.
      </p>
    </div>
  </div>
</Section>
</template>

<style scoped>

</style>
