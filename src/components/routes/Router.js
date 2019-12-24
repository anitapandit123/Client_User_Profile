import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Landing from '../layout/Landing';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { Fragment } from 'react';


const Routers = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Route exact path='/' component={Landing} />
                <section className="container">
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </section>
            </Fragment>

        </Router>
    )
}
export default Routers;