<script setup>
import Section from "@/components/Section.vue";

</script>

<template>
<Section>
  <div id="about" class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 grid gap-8 md:gap-10 md:grid-cols-2 items-center" data-aos="fade-up">
    <!-- FOTO -->
    <div class="flex justify-center order-first md:order-none mb-6 md:mb-0" data-aos="zoom-in" data-aos-delay="200">
      <div class="bg-[#F1F1F6] overflow-hidden rounded-full border-4 border-blue-500 flex items-center justify-center p-2 md:p-3 w-48 h-48 md:w-[250px] md:h-[250px]">
        <div class="rounded-full overflow-hidden w-full h-full">
          <img src="/io.jpg" alt="Foto ritratto di Simone Buccolieri" class="object-cover object-center w-full h-full" />
        </div>
      </div>
    </div>
    
    <!-- DESCRIZIONE -->
    <div class="max-w-[40rem] space-y-4" data-aos="fade-left" data-aos-delay="100">
      <h2 class="text-3xl font-bold md:text-5xl text-gray-900 mb-6">
        Chi Sono
      </h2>
      <p class="text-lg text-gray-700 leading-relaxed md:text-xl md:leading-10">
        Ciao! Sono un appassionato di tecnologia e sviluppo software,
        attualmente studente di <span class="font-bold text-gray-900">Informatica all'Università di Padova</span>.
        Fin da piccolo sono sempre stato affascinato dal mondo della programmazione
        e da come sia possibile trasformare un'idea in qualcosa di interattivo e funzionante.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed md:text-xl md:leading-10">
        Oltre allo sviluppo, sono una persona estremamente pragmatica: mi piace analizzare i requisiti e scegliere la tecnologia più adatta per raggiungere l'obiettivo in modo efficiente.
        Sono abituato a gestire sfide dinamiche, ottimizzare le performance e adattarmi rapidamente a stack e ambienti diversi, portando sempre a termine i progetti con precisione e puntualità.
        Nel mio tempo libero mi aggiorno costantemente sulle nuove tecnologie e mi dedico a progetti personali per affinare e consolidare le mie competenze come Full Stack Developer.
      </p>
    </div>
  </div>
</Section>
</template>

<style scoped>

</style>
