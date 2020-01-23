
import { post, get } from '../utils/http';
import { setAlert } from './alert';
import { setAuthToken } from '../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SCUCCESS,
    LOG_IN_FAIL

} from './types';

//LOAD USER (RETURN USER LOADED)
export const loadUser = () => async dispatch => {
    //check local storage and main app.js file
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await get('api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }
    catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }

}



//Register User
export const register = ({ name, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const newUser = {
        name,
        email,
        password
    };

    try {

        const res = await post('/api/auth', newUser, config);
        console.log(res);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAILURE
        });
    }

}


//LOGIN USER
export var login = ({ email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const newUser = {
        email,
        password
    };

    try {
        const res = await post('/auth', newUser, config);
        dispatch({
            type: LOGIN_SCUCCESS,
            payload: res.data
        });
        dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOG_IN_FAIL
        });
    }
}