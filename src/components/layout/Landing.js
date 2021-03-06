import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large"> Developer Connector</h1>
                    <p className="lead">Create a developer profile/portfolio,share post and get help from otherv developers</p>
                    <div className="buttons">
                        <Link to='/register' className="btn btn-primary">Sign Up</Link>
                        <Link to='/login' className='btn btn-light'>Log In</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default landing;