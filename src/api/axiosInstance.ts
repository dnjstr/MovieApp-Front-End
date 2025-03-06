import axios from "axios";

const { VITE_BACK_END_BASE_URL } = import.meta.env;

const axiosInstance = axios.create({
    baseURL: VITE_BACK_END_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.warn("Unauthorized! Redirecting to login...");
                localStorage.removeItem("accessToken");
                localStorage.clear()
                window.location.href = "/sign-in";
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
