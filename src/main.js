import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from "@/router/routing.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'swiper/swiper-bundle.css';

const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus)
app.use(router);
app.mount('#app');
app.use(pinia);

