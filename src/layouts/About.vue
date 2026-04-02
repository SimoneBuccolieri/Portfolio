<script setup>
import Section from "@/components/Section.vue";
</script>

<template>
  <Section id="about" class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-6" data-aos="fade-up">
      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: #8b5cf6;">Il mio profilo</p>
        <h2 class="text-3xl md:text-4xl font-bold section-title" style="color: var(--text-primary);">Chi Sono</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Photo -->
        <div class="flex justify-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="relative">
            <!-- Animated ring -->
            <div class="absolute -inset-1 rounded-full blur-sm opacity-70"
              style="background: linear-gradient(135deg, #8b5cf6, #6366f1, #3b82f6); animation: spin 6s linear infinite;"></div>
            <div class="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4"
              style="border-color: var(--bg-primary);">
              <img src="/io.jpg" alt="Foto ritratto di Simone Buccolieri" class="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="space-y-6 text-base md:text-lg leading-relaxed" style="color: var(--text-muted);" data-aos="fade-left" data-aos-delay="150">
          <p>
            Ciao! Sono uno studente di <span class="font-semibold" style="color: #8b5cf6;">Informatica all'Università di Padova</span> con una passione smisurata per lo sviluppo software. Amo trasformare idee complesse in prodotti digitali concreti, interattivi e dal design curato.
          </p>
          <p>
            Il mio approccio è <strong>estremamente pragmatico</strong>: scelgo sempre lo stack tecnologico più rapido e adatto per ottimizzare performance e scalabilità. Non mi fermo mai al "semplicemente funziona", ma punto all'eccellenza, aggiornandomi costantemente per creare soluzioni all'avanguardia.
          </p>

          <!-- CTA -->
          <div class="flex gap-3 pt-2 flex-wrap">
            <a href="mailto:simone@buccolieri.com"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
              style="background: linear-gradient(135deg, #8b5cf6, #6366f1);">
              Scrivimi
            </a>
            <a href="cv_simone.pdf" aria-label="Scarica il CV"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-primary);">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Scarica CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
