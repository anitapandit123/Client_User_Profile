

import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className="fas fa-code" /> Dev Connector
                       </Link>
            </h1>
            <a href="!#">Developers</a>
            <Link to='/login'> LogIn</Link>
            <Link to='/register'> Register</Link>

        </nav>
    )
}

export default Navbar;

































