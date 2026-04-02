<script setup lang="ts">
import Section from "@/components/Section.vue";
</script>

<template>
  <Section class="relative overflow-hidden min-h-[90vh] flex items-center">
    <!-- Glow blobs -->
    <div class="hero-glow" style="top: -100px; left: -100px;"></div>
    <div class="hero-glow" style="bottom: -150px; right: -100px; width: 500px; height: 500px;"></div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
      style="background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="relative z-10 text-center max-w-4xl mx-auto px-6 py-24" data-aos="fade-up">
      

      <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight" style="color: var(--text-primary);">
        Simone Buccolieri<br>
        <span class="gradient-text">Web Developer</span>
      </h1>

      <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style="color: var(--text-muted);">
        Full Stack Developer e studente di Informatica. Trasformo idee in
        <span class="font-semibold" style="color: var(--text-primary);">esperienze digitali</span>
        moderne, veloci e scalabili.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="mailto:simone@buccolieri.com"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/30"
          style="background: linear-gradient(135deg, #8b5cf6, #6366f1);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Contattami
        </a>
        <button
          @click="$scrollTo('#about', 600, { easing: 'ease-in-out' })"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
          style="background: var(--bg-card); border: 1px solid var(--border); color: var(--text-primary);">
          Chi sono
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </Section>
</template>
