import axios from 'axios';
// its a function it takes a token and passes the token in params if exist


export const setAuthToken = token => {
    if (token) { // if token is exist, it set as global header
        axios.defaults.headers.common['x-auth-token'] = token;
    } else { // if token does not exist, its gonna delete it from global header
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

