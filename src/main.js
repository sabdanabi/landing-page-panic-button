import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue'
import router from "@/router/routing.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'swiper/swiper-bundle.css';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const pinia = createPinia()

app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.use(Toast, {
    position: POSITION.TOP_CENTER,
    timeout: 3000,
});
app.mount('#app');
