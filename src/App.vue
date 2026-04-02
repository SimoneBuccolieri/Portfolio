<script setup>
import { ref, provide, onMounted } from 'vue';
import Navbar from "@/layouts/Navbar.vue";
import Header from "@/layouts/Header.vue";
import About from "@/layouts/About.vue";
import Education from "@/layouts/Education.vue";
import Experience from "@/layouts/Experience.vue";
import Footer from "@/layouts/Footer.vue";
import Skills from "@/components/Skills.vue";

const isDark = ref(false);

const toggleDark = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

provide('isDark', isDark);
provide('toggleDark', toggleDark);
</script>

<template>
  <div class="relative min-h-screen flex flex-col" style="background: var(--bg-primary); color: var(--text-primary);">
    <Navbar />
    <main class="flex-1">
      <Header />
      <Skills />
      <Education />
      <Experience />
      <About />
    </main>
    <Footer />
  </div>
</template>
