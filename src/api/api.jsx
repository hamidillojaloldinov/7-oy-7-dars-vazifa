import axios from 'axios'

const api = axios.create({
    baseURL: 'https://strapi-store-server.onrender.com/api',
})

export default api;