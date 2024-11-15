import { defineStore } from 'pinia';
import axios from 'axios';
import {useLoginEmailStore} from "@/stores/authStore.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useTokenStore = defineStore('token', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken'),
    }),

    actions: {
        async refreshAccessToken() {

            const loginStore = useLoginEmailStore();
            const refreshToken = loginStore.refreshToken;

            if (!refreshToken) {
                console.error('Refresh token tidak tersedia');
                return null;
            }

            try {
                const response = await axios.post(
                    `${baseURL}/auth/refresh_token`,
                    new URLSearchParams({ refresh_token: refreshToken }),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }
                );

                if (response.data.success) {
                    const newAccessToken = response.data.data.accessToken;
                    this.accessToken = newAccessToken;
                    localStorage.setItem('accessToken', newAccessToken);
                    console.log('Token berhasil diperbarui:', newAccessToken);
                    return newAccessToken;
                } else {
                    console.error('Gagal memperbarui token:', response.data.message);
                    return null;
                }
            }   catch (error) {
                console.error('Error saat memperbarui token:', error);
                return null;
            }
        },
    },
})