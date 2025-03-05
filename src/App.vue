<script setup>
import Navbar from './components/Navbar.vue'
import Container from './components/Container.vue'
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="box relative min-h-screen flex flex-col text-black">
    <Navbar />
    <Container />
    <projects />
    <about />
    <Footer />
  </div>
</template>

<style scoped>
</style>
