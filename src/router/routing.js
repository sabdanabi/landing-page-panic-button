import { createRouter, createWebHistory } from 'vue-router';
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