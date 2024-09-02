import axios from 'axios';

// const baseUrl = 'https://tripzb.azurewebsites.net';
const baseUrl = 'http://10.0.2.2:8080/';

export const api = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use
    (
        (config) => {
            return config;
        },
        (error) => {

            return Promise.reject(error);
        }); api.interceptors.response.
            use
            (
                (response) => {

                    return response;
                },
                (error) => {

                    return Promise.reject(error);
                });