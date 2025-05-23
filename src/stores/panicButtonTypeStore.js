import axios from 'axios'
import { defineStore } from 'pinia'
import {useLoginEmailStore} from "@/stores/authStore.js";
import {useToast} from "vue-toastification";
import router from "@/router/routing.js";
import api from "@/api/axiosIntance.js";


const baseURL = import.meta.env.VITE_API_BASE_URL;

export const usePanicButtonStore = defineStore("panicButton", {
    state: () => ({
        panicButtonTypes: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchPanicButtonTypes() {
            this.loading = true;
            try {
                const response = await api.get("/panic_button_type");
                if (response.data.success) {
                    this.panicButtonTypes = response.data.data;
                } else {
                    this.error = response.data.message || "Gagal memuat data.";
                }
            } catch (error) {
                console.error("Error fetching panic button types:", error.response?.data || error.message);
                this.error = error.response?.data?.message || "Terjadi kesalahan saat memanggil API.";
            } finally {
                this.loading = false;
            }
        },
    },
});