import { defineStore } from 'pinia';
import axios from 'axios';
import {useLoginEmailStore} from "@/stores/authStore.js";
import {useToast} from "vue-toastification";
import {useTokenStore} from "@/stores/refreshTokenStore.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useProfileStore = defineStore('profile', {
    state: () => ({
        userProfile: null,
        error: null,
    }),

    actions: {
        async fetchUserProfile() {

            const toast = useToast();
            let token = localStorage.getItem('accessToken');
            // console.log(token)

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
                    const tokenStore = useTokenStore();
                    await tokenStore.refreshAccessToken();
                    // toast.error("Token kadaluarsa, silahkan login ulang");
                } else {
                    console.error('Error mengambil profil:', error);
                    this.error = error.response?.data?.message || 'Gagal mengambil profil';
                }
            }
        },
    },
});
