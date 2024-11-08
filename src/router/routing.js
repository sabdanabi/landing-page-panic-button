import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DisplayApps from "@/views/DisplayApps.vue";
import FuaturesApps from "@/views/FuaturesApps.vue";
import Intructios from "@/views/Intructios.vue";
import Products from "@/views/Products.vue";
import ReviewCustomer from "@/views/ReviewCustomer.vue";
import Footer from "@/views/Footer.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import Sections from "@/pages/Sections.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
    },
    {
        path: '/sections',
        name: 'Sections',
        component: Sections,
    },
    {
        path: '/profil',
        name: 'ProfilePage',
        component: ProfilePage,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;