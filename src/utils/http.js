import axios from 'axios';

const api = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: localStorage.getItem('token'),
})

api.interceptors.request.use(config => {
    // Do something before request is sent
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem('token');
    }
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(res)
    // Do something before response is sent
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default api