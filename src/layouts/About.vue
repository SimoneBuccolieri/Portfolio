<script setup>
import Section from "@/components/Section.vue";

</script>

<template>
<Section>
  <div id="about" class="grid gap-10 md:grid-cols-2 items-center">
    <div class="flex justify-center">
      <div class="relative w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-blue-200">
        <div class="bg-white h-[300px] w-[300px] bg-cover"></div>

      </div>
    </div>
    <div class="max-w-[30rem]">
      <h2 class="text-3xl font-bold md:text-4xl">
        Chi Sono
      </h2>
      <p class="text-gray-500 mt-4 ">
        Ciao! Sono un appassionato di tecnologia e sviluppo software,
        attualmente studente di Informatica all'Università di Padova.
        Fin da piccolo sono sempre stato affascinato dal mondo della programmazione
        e da come sia possibile trasformare un'idea in qualcosa di interattivo
        e funzionante.
      </p>
      <p class="text-gray-500 mt-4 ">
        Oltre allo sviluppo, mi piace sperimentare con nuove tecnologie,
        risolvere problemi logici e capire come funzionano i sistemi dietro le quinte.
        Sono sempre alla ricerca di nuove sfide per migliorare le mie competenze e imparare qualcosa di nuovo ogni giorno!
      </p>
    </div>
  </div>
</Section>
</template>

<style scoped>

</style>
