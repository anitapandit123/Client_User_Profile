import axios from 'axios';

/**
 * creating axios instance
 */

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',

});


/**
 * GET method
 * @param {String} url
 * @param {Object} params
 */
export function get(url, params = {}) {
    return axiosInstance({
        method: 'get',
        url,
        params,

    });
}

/**
 * GET method
 * @param {String} url
 * @param {Object} data
 */
export function post(url, data) {
    return axiosInstance({
        method: 'post',
        url,
        data,
    });
}

/**
 * GET method
 * @param {String} url
 * @param {Object} data
 */
export function put(url, data) {
    return axiosInstance({
        method: 'put',
        url,
        data,
    });
}


