import {defineStore} from "pinia";
import api from "@/api/axiosIntance.js";

export const useInvoiceStore = defineStore("invoice", {
    state: () => ({
        invoices: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchInvoices(status = "PAID") {
            this.loading = true;
            this.error = null;
            try {
                const response = await api.get(`/invoice`, {
                    params: { status },
                });
                if (response.data.success) {
                    this.invoices = response.data.data.data;
                } else {
                    this.error = "Gagal mengambil data invoice.";
                }
            } catch (error) {
                this.error =
                    error.response?.data?.message || "Terjadi kesalahan saat mengambil data.";
                console.error("Error:", error);
            } finally {
                this.loading = false;
            }
        },
    },
});