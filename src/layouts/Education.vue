<script setup>
import Section from "@/components/Section.vue";
</script>

<template>
  <Section id="education" class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-6" data-aos="fade-up">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold section-title" style="color: var(--text-primary);">Formazione</h2>
      </div>

      <!-- Card -->
      <div class="glass-card p-8 md:p-12 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <!-- Left accent bar -->
        <div class="absolute top-0 left-0 w-1 h-full rounded-l-xl" style="background: linear-gradient(180deg, #8b5cf6, #6366f1);"></div>

        <!-- Icon badge -->
        <div class="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-sm font-semibold"
          style="background: rgba(139,92,246,0.1); color: #8b5cf6;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM12 12.82L4.2 8.6L12 4.38L19.8 8.6L12 12.82Z"/>
            <path d="M5.5 11.52V18C5.5 19.1 8 21 12 21C16 21 18.5 19.1 18.5 18V11.52L12 15L5.5 11.52Z"/>
          </svg>
          Università degli Studi di Padova
        </div>

        <div class="space-y-5 text-base md:text-lg leading-relaxed" style="color: var(--text-muted);">
          <p>
            Frequento il corso di Laurea in
            <span class="font-semibold" style="color: #8b5cf6;">Informatica</span>
            presso l'Università degli Studi di Padova, uno degli atenei più prestigiosi in Italia per le discipline tecniche e scientifiche.
          </p>
          <p>
            Il percorso mi ha permesso di approfondire le fondamenta della Computer Science — algoritmi, strutture dati, reti, sviluppo software — con una mentalità logica e orientata al problem-solving. L'ambiente accademico mi permette non solo di approcciare nuove tecnologie, ma di padroneggiarne i principi teorici sottostanti.
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>
