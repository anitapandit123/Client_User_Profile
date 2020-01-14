import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';


//import redux

import { Provider } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './components/routes/Router';
const App = () => (
  <Provider>
  <Routers store={store}/>
  </Provider>

);



export default App;
