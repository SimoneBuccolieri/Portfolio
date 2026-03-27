import './assets/main.css'

import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import VueScrollTo from "vue-scrollto";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const createApp = ViteSSG(App, ({ app, isClient }) => {
  app.use(VueScrollTo);
  
  if (isClient) {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
  }
});