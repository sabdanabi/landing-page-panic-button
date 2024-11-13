import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import Sections from "@/pages/Sections.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import {getAuth} from "firebase/auth";

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
        meta: { requiresAuth: true },
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
    const auth = getAuth();
    const user = auth.currentUser;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!user) {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;