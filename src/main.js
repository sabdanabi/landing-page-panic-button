import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from "@/router/routing.js";
import ElementPlus from 'element-plus';
import Vue3GoogleLogin from 'vue3-google-login';
import 'element-plus/dist/index.css';
import 'swiper/swiper-bundle.css';
import 'vue-toastification/dist/index.css';
import './assets/main.css';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkfbw8cUocSrhzIVW0HUhqTCx5X44Kb_s",
    authDomain: "panic-button-f0c82.firebaseapp.com",
    databaseURL: "https://panic-button-f0c82-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "panic-button-f0c82",
    storageBucket: "panic-button-f0c82.firebasestorage.app",
    messagingSenderId: "505490102336",
    appId: "1:505490102336:web:8af8264cc127091a45e7a5",
    measurementId: "G-58LSFMCC7P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const pinia = createPinia();

const vueApp = createApp(App);
vueApp.use(ElementPlus);
vueApp.use(router);
vueApp.use(pinia);
vueApp.use(Toast, {
    position: POSITION.TOP_CENTER,
    timeout: 3000,
});
vueApp.use(Vue3GoogleLogin, {
    clientId: '292666820074-kv5jm2bdl0trrq4gdarotdfff16669di.apps.googleusercontent.com'
});

vueApp.mount('#app');

export { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult };
