import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DisplayApps from "@/views/DisplayApps.vue";
import FuaturesApps from "@/views/FuaturesApps.vue";
import Intructios from "@/views/Intructios.vue";
import Products from "@/views/Products.vue";
import ReviewCustomer from "@/views/ReviewCustomer.vue";
import Footer from "@/views/Footer.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/displayApps',
        name: 'displayApps',
        component: DisplayApps,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/fuatures',
        name: 'fuatures',
        component: FuaturesApps,
    },
    {
        path: '/intructios',
        name: 'intructios',
        component: Intructios,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
    {
        path: '/review',
        name: 'review',
        component: ReviewCustomer,
    },
    {
        path: '/footer',
        name: 'footer',
        component: Footer,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    });
                }, 300);
            });
        } else {
            return { left: 0, top: 0, behavior: 'smooth' };
        }
    }
});

export default router;