import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SCUCCESS,
    LOG_IN_FAIL

} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true, //by defeault true, request to backend,,once we get the data is set to false.
    user: null // when make a request to backend, api/auth we get user data{name,email,avatar}
}

export default function (state = initialState, action) {
    const { type, payload } = action; //dstructuring action object


    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload // it will be name,email and avatar but not password beacause in backend we hv done .select(-password)
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };

        case LOGIN_SCUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case LOG_IN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }

}


//case REGISTER_FAILURE:
// localStorage.removeItem('token');
        // return {
        //     ...state,
        //     token: null,
        //     isAuthenticated: false,
        //     loading: false
        // }