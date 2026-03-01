import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from "vue-scrollto";
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
app.use(VueScrollTo);
app.mount("#app");

// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});