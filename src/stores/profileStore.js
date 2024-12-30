import { defineStore } from 'pinia';
import axios from 'axios';
import {useToast} from "vue-toastification";
import router from "@/router/routing.js";
import api from "@/api/axiosIntance.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useProfileStore = defineStore('profile', {
    state: () => ({
        userProfile: null,
        error: null,
    }),

    actions: {
        async fetchUserProfile() {
            const toast = useToast();

            try {
                const response = await api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (response.data.success) {
                    this.userProfile = response.data.data.user;
                } else {
                    this.error = response.data.message || 'Gagal mengambil profil';
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error("Token kadaluarsa, silahkan login ulang");
                } else {
                    console.error('Error mengambil profil:', error);
                    this.error = error.response?.data?.message || 'Gagal mengambil profil';
                }
            }
        },
    },
});

export const useUpdateProfileStore = defineStore('updateProfile', {
    state: () => ({
        successMessage: null,
        errorMessage: null,
    }),

    actions: {
        async updateUserProfile(profileData) {
            const toast = useToast();

            try {
                const formData = new FormData();
                formData.append('name', profileData.name);
                formData.append('phone', profileData.phone);
                formData.append('email', profileData.email);
                if (profileData.avatar) {
                    formData.append('avatar', profileData.avatar);
                }

                const response = await api.patch('/profile', formData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (response.data.success) {
                    this.successMessage = response.data.message;
                    toast.success("Profil berhasil diperbarui");
                } else {
                    this.errorMessage = response.data.message || "Gagal memperbarui profil";
                    toast.error(this.errorMessage);
                }
            } catch (error) {
                console.error("Error memperbarui profil:", error);
                this.errorMessage = error.response?.data?.message || "Gagal memperbarui profil";
                toast.error(this.errorMessage);
            }
        },
    },
});