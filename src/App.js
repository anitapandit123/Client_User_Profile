import React from 'react';
import { Provider } from 'react-redux';
import { useEffect } from 'react'
import Alert from './components/layout/Alert';
// import { setAuthToken } from './utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import Routers from './components/routes/Router';
import { loadUser } from './actions/auth';


// if (localStorage.token) {
//   setAuthToken(localStorage.token)
// }

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
      <Routers></Routers>
    </Provider>
  )
}
  ;




export default App;
