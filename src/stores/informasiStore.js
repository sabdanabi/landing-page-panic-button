import {useLoginEmailStore} from "@/stores/authStore.js";
import axios from "axios";
import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import router from "@/router/routing.js";
import api from "@/api/axiosIntance.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useInformationStore = defineStore("information", {
    state: () => ({
        informations: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchInformations() {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.get("/information");

                if (response.data.success) {
                    this.informations = response.data.data.informations || [];
                } else {
                    this.error = response.data.message || "Gagal memuat data.";
                }
            } catch (error) {
                console.error("Error fetching informations:", error.response?.data || error.message);
                this.error = error.response?.data?.message || "Terjadi kesalahan saat memanggil API.";
            } finally {
                this.loading = false;
            }
        },
    },
});