import axios from 'axios'
import { defineStore } from 'pinia'


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

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`${baseURL}/panic_button_type`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.success) {
                    this.panicButtonTypes = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        imageUrl: `https://api-panicbutton.can.co.id/${item.image}`,
                        subscriptionPrice: item.subscription_price,
                        installationPrice: item.instalation_price,
                    }));
                } else {
                    this.error = response.data.message || "Gagal memuat data";
                }
            } catch (error) {
                this.error = error.response?.data?.message || "Terjadi kesalahan saat memanggil API";
            } finally {
                this.loading = false;
            }
        }
    }
});