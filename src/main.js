import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from "@/router/routing.js";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'swiper/swiper-bundle.css';
import 'vue-toastification/dist/index.css';
import './assets/main.css';

const vueApp = createApp(App);
const pinia = createPinia();
vueApp.use(ElementPlus);
vueApp.use(router);
vueApp.use(pinia);
vueApp.use(Toast, {
    position: POSITION.TOP_CENTER,
    timeout: 3000,
});

// const loginStore = useLoginEmailStore();
// loginStore.loadUser();

vueApp.mount('#app');
