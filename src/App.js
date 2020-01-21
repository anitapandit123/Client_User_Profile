import React from 'react';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//import redux
import { Provider } from 'react-redux';
import store from './store';
import Routers from './components/routes/Router';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = () => {
  useEffect(() => { // when state update it will keep running,,its a constant loop
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store} >
      <Routers />
    </Provider>
  )


};



export default App;
