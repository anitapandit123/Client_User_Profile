import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Landing from '../layout/Landing'
import Alert from '../layout/Alert';
import { Fragment } from 'react';
import { setAuthToken } from '../../utils/setAuthToken';



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