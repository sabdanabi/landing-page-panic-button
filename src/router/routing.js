import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import Sections from "@/pages/Sections.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import { useLoginEmailStore } from '@/stores/authStore';


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
        meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
    const authStore = useLoginEmailStore();

    const isAuthenticated = authStore.user !== null;

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});



export default router;