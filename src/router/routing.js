import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import Sections from "@/pages/Sections.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
    {
        path: '/login',
        name: 'login-page',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'register-page',
        component: RegisterPage,
    },
    {
        path: '/',
        name: 'sections-page',
        component: Sections,
        meta: { requiresAuth: true },
    },
    {
        path: '/profil',
        name: 'profile-page',
        component: () => import('@/pages/ProfilePage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!user) {
                next({ path: '/login' });
            } else {
                next();
            }
        } else {
            next();
        }
    });
});


export default router;