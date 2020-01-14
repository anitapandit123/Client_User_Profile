import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import redux
import { Provider } from 'react-redux';
import store from './store';
import Routers from './components/routes/Router';


const App = () => (
  <Provider store={store} >
    <Routers />
  </Provider>

);



export default App;
