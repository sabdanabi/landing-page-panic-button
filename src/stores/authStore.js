import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification';
import { auth, provider, signInWithPopup } from "../firebase/firebaseConfig.js";

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
        refreshToken: null,
        success: null,
        error: null,
    }),

    actions: {
        async loginWithEmail() {
            const toast = useToast();
            this.loading = true;
            this.error = null;

            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;

                const email = user.email;
                const firebase_id = user.uid;
                // const firebaseToken = await user.getIdToken();

                const response = await axios.post(
                    `${baseURL}/auth/login/email`,
                    {
                        email: email,
                        firebase_id: firebase_id,
                    },
                );

                if (response.data.success) {
                    this.user = response.data.data.user;
                    console.log(user)
                    this.refreshToken = response.data.data.refreshToken;
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
});
