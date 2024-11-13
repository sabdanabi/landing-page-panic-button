import axios from "axios";
import {useLoginEmailStore} from "@/stores/authStore.js";


const axiosInstance = axios.create({
    baseURL: 'https://api-panicbutton.can.co.id/v1',
});


axiosInstance.interceptors.request.use((config) => {
    const authStore = useLoginEmailStore();
    const token = authStore.refreshToken;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;