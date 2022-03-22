import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_forms';

const NavBar = () => {

    return(
        <div className='nav-bar-outer'>
            <h3 id="logo">Go H20 Swimming </h3>
            <nav>
                <ul className="nav-bar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/lessons">Swim Lessons</Link></li>
                    <li><Link to="/prices">Prices</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </nav>
            <a>
                <button 
                className="button-contact">Contact</button> <br/>
            </a>
            <span className="login-info">
                <SessionForm />
            </span>
        </div>
    )

}

export default NavBar;
