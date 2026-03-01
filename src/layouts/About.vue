<script setup>
import Section from "@/components/Section.vue";

</script>

<template>
<Section>
  <div id="about" class="max-w-5xl mx-auto px-6 md:px-12 pt-8" data-aos="fade-up">
    <div class="flex items-center justify-center gap-4 mb-12">
      <h2 class="text-3xl font-bold md:text-5xl text-gray-900">
        Chi Sono
      </h2>
    </div>
    
    <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 items-center justify-between" data-aos="fade-up" data-aos-delay="100">
      <div class="flex-shrink-0 flex justify-center" data-aos="zoom-in" data-aos-delay="200">
        <div class="bg-[#F1F1F6] w-[250px] h-[250px] overflow-hidden rounded-full border-[6px] border-blue-100/50 flex items-center justify-center relative shadow-inner">
          <img src="/io.jpg" alt="Immagine" class="w-[85%] h-[85%] object-cover rounded-full" />
        </div>
      </div>
      
      <div class="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed md:text-xl md:leading-10">
        <p>
          Ciao! Sono un appassionato di tecnologia e sviluppo software,
          attualmente studente di <span class="font-bold text-gray-900">Informatica all'Università di Padova</span>.
          Fin da piccolo sono sempre stato affascinato dal mondo della programmazione
          e da come sia possibile trasformare un'idea in qualcosa di interattivo e funzionante.
        </p>
        <p>
          Oltre allo sviluppo, mi piace sperimentare con nuove tecnologie,
          risolvere problemi logici e capire come funzionano i sistemi dietro le quinte.
          Sono sempre alla ricerca di nuove sfide per migliorare le mie competenze e imparare qualcosa di nuovo ogni giorno!
        </p>
      </div>
    </div>
  </div>
</Section>
</template>

<style scoped>

</style>
