import axios from 'axios'
import { defineStore } from 'pinia'
import {useLoginEmailStore} from "@/stores/authStore.js";


const baseURL = import.meta.env.VITE_API_BASE_URL;

export const usePanicButtonStore = defineStore('panicButton', {
    state: () => ({
        panicButtonTypes: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchPanicButtonTypes() {
            this.loading = true;
            this.error = null;

            // const authStore = useLoginEmailStore();
            // const token = authStore.refreshToken
            // console.log("ini adalah" + token)

            // const loginStore = useLoginEmailStore();
            // const token = localStorage.getItem('token') || loginStore.token;
            // console.log(token)

            const token = localStorage.getItem('token');
            console.log("test " + token)

            try {
                const response = await axios.get(`https://api-panicbutton.can.co.id/v1/panic_button_type`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.success) {
                    this.panicButtonTypes = response.data.data;
                } else {
                    this.error = response.data.message || "Gagal memuat data";
                }
            } catch (error) {
                console.log('API error:', error.response?.data || error.message);
                this.error = error.response?.data?.message || "Terjadi kesalahan saat memanggil API";
            } finally {
                this.loading = false;
            }
        }
    }
});