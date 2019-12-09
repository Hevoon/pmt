import axios from 'axios';


export function ax(url, method = 'get', data = {}) {
    return axios({
        method: method,
        url: url,
        data: data,
        withCredentials: true
    })
}