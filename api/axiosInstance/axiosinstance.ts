import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NASA_API_URL
})


export default axiosInstance