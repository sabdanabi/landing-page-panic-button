import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification';
import { auth, provider, signInWithPopup } from "../firebase/firebaseConfig.js";
import {useTokenStore} from "@/stores/refreshTokenStore.js";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import router from "@/router/routing.js";
import api from "@/api/axiosIntance.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useRegisterStore = defineStore('register', {
    state: () => ({
        loading: false,
        user: null,
        success: null,
        error: null,
    }),

    actions: {
        async register(data) {
            const toast = useToast();
            this.loading = true;
            this.success = null;
            this.error = null;

            try {
                const response = await axios.post(`${baseURL}/auth/register`, data);

                if (response.data.success) {
                    this.user = response.data.data.user;
                    this.success = response.data.message;
                    toast.success(this.success);
                } else {
                    this.error = response.data.message || 'Registrasi gagal';
                    toast.error(this.error);
                }
            } catch (error) {
                this.error = error.response?.data?.message || 'Terjadi kesalahan selama registrasi';
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        },
    },
});

export const useLoginEmailStore = defineStore('loginEmail', {
    state: () => ({
        loading: false,
        user: null,
        refreshToken: null,
        success: null,
        error: null,
    }),

    actions: {

        loadUser() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user;
                } else {
                    this.user = null;
                }
            });
        },

        async loginWithEmail() {
            const toast = useToast();
            this.loading = true;
            this.error = null;

            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;

                const email = user.email;
                const firebase_id = user.uid;

                const response = await axios.post(
                    `${baseURL}/auth/login/email`,
                    { email: email, firebase_id: firebase_id },
                );

                if (response.data.success) {
                    this.user = response.data.data.user;
                    this.refreshToken = response.data.data.refreshToken;
                    const tokenStore = useTokenStore();
                    await tokenStore.refreshAccessToken();
                    toast.success(response.data.message);
                } else {
                    this.error = response.data.message || 'Login gagal';
                    toast.error(this.error);
                }
            } catch (error) {
                this.error = error.response?.data?.message || 'Terjadi kesalahan selama login';
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        },
    },
    persist: true,
});

export const useLogoutStore = defineStore('logout', {
    state: () => ({
        error: null,
    }),

    actions: {
        async logout() {
            const toast = useToast();
            const refreshToken = localStorage.getItem('accessToken');

            try {
                const response = await api.post(
                    `/auth/logout`,
                    new URLSearchParams({ refresh_token: refreshToken }),
                    {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                if (response.data.success) {
                    localStorage.removeItem('accessToken');
                    toast.success("Logout berhasil");
                    console.log("Redirecting to login...");
                    await router.push('/login');
                    location.reload();
                } else {
                    this.error = response.data.message || 'Gagal logout';
                    toast.error(this.error);
                }
            } catch (error) {
                console.error('Error saat logout:', error);
                this.error = error.response?.data?.message || 'Gagal logout';
                toast.error(this.error);
            }
        },
    },
});