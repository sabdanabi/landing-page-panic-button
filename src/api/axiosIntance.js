import axios from 'axios';
import {useTokenStore} from "@/stores/refreshTokenStore.js";
import router from "@/router/routing.js";

const api = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const tokenStore = useTokenStore();

            const newAccessToken = await tokenStore.refreshAccessToken();

            if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } else {
                localStorage.removeItem('accessToken');
                await router.push('/login');
            }
        }

        return Promise.reject(error);
    }
);

export default api;