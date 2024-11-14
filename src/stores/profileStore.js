import { defineStore } from 'pinia';
import axios from 'axios';
import {useLoginEmailStore} from "@/stores/authStore.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useProfileStore = defineStore('profile', {
    state: () => ({
        userProfile: null,
        error: null,
    }),

    actions: {
        async fetchUserProfile() {
            let token = localStorage.getItem('accessToken'); // Ambil token dari localStorage atau dari store
            console.log(token)
            try {
                const response = await axios.get(`${baseURL}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    this.userProfile = response.data.data.user;
                } else {
                    this.error = response.data.message || 'Gagal mengambil profil';
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    console.log('Token kadaluarsa, mencoba untuk memperbarui token...');


                    // Ambil refreshToken dari store login
                    const loginStore = useLoginEmailStore();
                    const refreshToken = loginStore.refreshToken; // Ambil refreshToken dari state login
                    console.log(refreshToken)

                    if (refreshToken) {
                        const isRefreshed = await this.refreshToken(refreshToken);

                        if (isRefreshed) {
                            token = localStorage.getItem('accessToken'); // Ambil token baru dari localStorage setelah refresh
                            try {
                                const retryResponse = await axios.get(`${baseURL}/profile`, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                });
                                this.userProfile = retryResponse.data.data.user;
                            } catch (retryError) {
                                console.error('Gagal mengambil profil setelah token diperbarui:', retryError);
                                this.error = 'Gagal mengambil profil setelah token diperbarui';
                            }
                        } else {
                            this.error = 'Sesi habis, silakan login ulang';
                        }
                    } else {
                        this.error = 'Refresh token tidak ditemukan';
                    }
                } else {
                    console.error('Error mengambil profil:', error);
                    this.error = error.response?.data?.message || 'Gagal mengambil profil';
                }
            }
        },

        async refreshToken(refreshToken) {
            if (!refreshToken) {
                console.error('Refresh token tidak tersedia');
                return false;
            }

            try {
                const response = await axios.post(
                    `${baseURL}/auth/refresh_token`,
                    new URLSearchParams({ refresh_token: refreshToken }), // Kirim refresh token untuk mendapatkan access token baru
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }
                );

                if (response.data.success) {
                    const newAccessToken = response.data.data.accessToken;
                    localStorage.setItem('accessToken', newAccessToken); // Simpan token baru di localStorage
                    console.log('Token berhasil diperbarui:', newAccessToken);
                    return true;
                } else {
                    console.error('Gagal memperbarui token:', response.data.message);
                    return false;
                }
            } catch (error) {
                console.error('Error saat memperbarui token:', error);
                return false;
            }
        },
    },
});
