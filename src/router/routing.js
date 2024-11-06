import { createRouter, createWebHistory } from 'vue-router';
import PageTest from "@/pages/PageTest.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import Sections from "@/pages/Sections.vue";

const routes = [
    {
        path: '/',
        name: 'pageTest',
        component: PageTest,
    },
    // {
    //     path: '/home',
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
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
    },
    {
        path: '/all-sections',
        name: 'Sections',
        component: Sections,
        meta: { hideNavbar: true }

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
