import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://54.252.243.166/api",
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
