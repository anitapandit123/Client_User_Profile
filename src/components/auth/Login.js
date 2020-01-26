import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { post } from '../../utils/http';
//connect to redux
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({

        email: '',
        password: ''

    });


    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password)
        console.log("sucessfully logged in")
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In </h1>
            <p className='lead'>
                <i className="fas fa-user" /> Sign In To Your Account
                </p>

            <form className="form" onSubmit={e => onSubmit(e)}>

                <div className="form-group">
                    <input type="text"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6" />
                </div>


                <input type="submit" className="btn btn-primary" value="Login" />
            </form>

            <p className="my-1">
                Do Not Have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )

}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});




export default connect(mapStateToProps, { login })(Login);