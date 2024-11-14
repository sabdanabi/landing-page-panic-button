import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api-panicbutton.can.co.id/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('acessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// handle error 401
axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            await refreshAccessToken();
            return axiosInstance(error.config);
        }
        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    try {
        const response = await axiosInstance.post('/auth/refresh_token', {
            refresh_token: refreshToken,
        });

        const { acessToken, refresh_token } = response.data;

        localStorage.setItem('acessToken', acessToken);
        localStorage.setItem('refresh_token', refresh_token || refreshToken);
    } catch (error) {
        console.error('Gagal melakukan refresh token', error);
        throw error;
    }
}

export default axiosInstance;
