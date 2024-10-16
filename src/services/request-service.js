import axios from 'axios';

const httpService = axios.create({
    baseURL: 'https://det-insta-backend-new5.isaqueheider.com',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});


httpService.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    get(url, config = {}) {
        return httpService.get(url, config);
    },

    location() {
        return axios.create({
            baseURL: 'https://det-insta-backend-new5.isaqueheider.com',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        }).get('https://get.geojs.io/v1/ip/geo.json');
    },

    post(url, data, config = {}) {
        return httpService.post(url, data, config);
    },

    put(url, data, config = {}) {
        return httpService.put(url, data, config);
    },

    patch(url, data, config = {}) {
        return httpService.patch(url, data, config);
    },

    delete(url, config = {}) {
        return httpService.delete(url, config);
    },
};
