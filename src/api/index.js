import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000/' })

API.interceptors.request.use(req => {
    if (localStorage.getItem('Profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})