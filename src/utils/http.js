import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';


export function ax(url, method = 'get', data = {}) {
    return axios({
        method: method,
        url: url,
        data: data,
        withCredentials: true
    })
}