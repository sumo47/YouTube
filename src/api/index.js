import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000/' })

API.interceptors.request.use(req => {
    if (localStorage.getItem('Profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login = (authData) => API.post('/user/login', authData);

export const updateChannelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData)