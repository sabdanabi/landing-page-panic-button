import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification';
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const useAuthStore = defineStore('auth', {
    state: () => ({
        success: false,
        message: '',
        loading: false,
        error: null,
    }),

    actions: {
        async register(userData) {
            const toast = useToast();
            this.loading = true;
            this.success = false;
            this.error = null;

            try {
                const response = await axios.post(
                    `https://api-panicbutton.can.co.id/v1/auth/register`,
                    new URLSearchParams(userData),
                )

                if (response.data.code === 200 && response.data.success) {
                    this.success = true
                    this.message = response.data.message || 'Registration successful'
                    toast.success(this.message);
                } else {
                    this.error = response.data.message || 'Registration failed'
                    toast.error(this.error);
                }

            } catch (error) {
                this.error = error.response?.data?.message || 'Network error'
                toast.error(this.error);
            } finally {
                this.loading = false
            }
        }
    }
})