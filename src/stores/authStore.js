import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification';
import axios from 'axios'
import {auth, getRedirectResult, provider, signInWithRedirect} from "@/firebase/firebase.js";
import router from "@/router/routing.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useRegisterStore = defineStore('auth', {
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

export const useLoginEmailStore = defineStore('auth', {
    state: () => ({
        loading: false,
        user: null,
        error: null,
    }),

    actions: {
        async loginWithEmail() {
            const toast = useToast();
            this.loading = true;

            try {
                await signInWithRedirect(auth, provider);
            } catch (error) {
                this.error = "Terjadi kesalahan selama login.";
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        },

        async handleRedirectResult() {
            const toast = useToast();
            this.loading = true;

            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    this.user = result.user; // Menyimpan informasi user
                    toast.success("Login berhasil!");
                    router.push('/sections'); // Redirect setelah login berhasil
                }
            } catch (error) {
                this.error = "Terjadi kesalahan saat mengelola hasil redirect.";
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    },
});