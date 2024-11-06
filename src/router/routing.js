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
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    // },
    // {
    //     path: '/displayApps',
    //     name: 'displayApps',
    //     component: DisplayApps,
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: About,
    // },
    // {
    //     path: '/fuatures',
    //     name: 'fuatures',
    //     component: FuaturesApps,
    // },
    // {
    //     path: '/intructios',
    //     name: 'intructios',
    //     component: Intructios,
    // },
    // {
    //     path: '/products',
    //     name: 'products',
    //     component: Products,
    // },
    // {
    //     path: '/review',
    //     name: 'review',
    //     component: ReviewCustomer,
    // },
    // {
    //     path: '/footer',
    //     name: 'footer',
    //     component: Footer,
    // },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;