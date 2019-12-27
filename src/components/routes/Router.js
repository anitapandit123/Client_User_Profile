import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Landing from '../layout/Landing'
import { Fragment } from 'react';


const Routers = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Route exact path='/' component={Landing} />
                <section className="container">
                    <Switch>
                        <Route exact path='/login' component={Login} />
                    </Switch>
                    <Switch>
                        <Route exact path='/register' component={Register} />
                    </Switch>
                    <Switch>
                        <Route exact path='/landing' component={Landing} />
                    </Switch>
                </section>
            </Fragment>

        </Router>
    )
}
export default Routers;