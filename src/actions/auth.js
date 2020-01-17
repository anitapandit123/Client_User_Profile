import axios from 'axios';
import { post } from '../utils/http';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './types';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',

});


//Register User
export const register = ({ name, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });

    try {

        const res = await post('/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAILURE
        })
    }

}
