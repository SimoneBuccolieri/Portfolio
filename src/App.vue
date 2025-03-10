<script setup>
import Navbar from "@/layouts/Navbar.vue";
import Header from "@/layouts/Header.vue";
import About from "@/layouts/About.vue";
import Projects from "@/layouts/Projects.vue";
import Footer from "@/layouts/Footer.vue";
import Skills from "@/components/Skills.vue";
</script>

<template>
  <div class="relative bg-gray-50 min-h-screen flex flex-col text-black">
    <Navbar />
    <Header />
    <Skills/>
    <Projects />
    <About />
    <Footer />
  </div>
</template>

<style scoped>
</style>
