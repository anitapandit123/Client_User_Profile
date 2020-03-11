import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Landing from '../layout/Landing'
import Dashboard from '../dashboard/Dashboard';
import Alert from '../layout/Alert';
import { Fragment } from 'react';

import { setAuthToken } from '../../utils/setAuthToken';
import { PrivateRoute } from '../dashboard/Dashboard';




if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const Routers = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Route exact path='/' component={Landing} />
                <section className="container">
                    <Alert />
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    )
}
export default Routers;