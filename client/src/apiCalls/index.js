// import axios from "axios";

// export const url = "http://localhost:5000";

// export const axiosInstance = axios.create({
//     headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`
//     }
// });

import axios from "axios";

export const url = "https://chat-app-server-ex04.onrender.com";

export const axiosInstance = axios.create({
    baseURL: url,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});