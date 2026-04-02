<script setup>
import Section from "@/components/Section.vue";

const techStack = ['JavaScript', 'C#', 'SQL Server', 'Vue.js'];
</script>

<template>
  <Section id="experience" class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-6" data-aos="fade-up">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold section-title" style="color: var(--text-primary);">Esperienza Lavorativa</h2>
      </div>

      <!-- Card -->
      <div class="glass-card p-8 md:p-12 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <!-- Left accent bar -->
        <div class="absolute top-0 left-0 w-1 h-full rounded-l-xl" style="background: linear-gradient(180deg, #6366f1, #3b82f6);"></div>

        <!-- Role badge -->
        <div class="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-sm font-semibold"
          style="background: rgba(99,102,241,0.1); color: #6366f1;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/></svg>
          Full Stack Developer
        </div>

        <div class="space-y-5 text-base md:text-lg leading-relaxed mb-8" style="color: var(--text-muted);">
          <p>
            Lavoro come <span class="font-semibold" style="color: var(--text-primary);">Full Stack Developer</span> presso <span class="font-semibold" style="color: #6366f1;">DigitalOps Srl</span> a Vicenza, occupandomi sia dello sviluppo lato client che della logica server, portando ogni funzionalità dalla progettazione tecnica fino al deploy in produzione.
          </p>
          <p>
            Il mio stack principale si basa su ecosistemi robusti: utilizzo <span class="font-semibold" style="color: var(--text-primary);">JavaScript</span> per interfacce reattive e performanti, <span class="font-semibold" style="color: var(--text-primary);">C#</span> per backend solidi, e <span class="font-semibold" style="color: var(--text-primary);">SQL Server</span> per la persistenza e l'ottimizzazione dei dati.
          </p>
        </div>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack" :key="tech"
            class="px-3 py-1 rounded-full text-xs font-semibold"
            style="background: rgba(99,102,241,0.08); color: #6366f1; border: 1px solid rgba(99,102,241,0.2);"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </Section>
</template>
