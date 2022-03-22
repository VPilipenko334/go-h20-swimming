import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className='nav-bar-outer'>
            <h3 id="logo">Go H20 Swimming </h3>
            <nav>
                <ul className="nav-bar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/lessons">Swim Lesson Types</Link></li>
                    <li><Link to="/prices">Prices</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </nav>
            <a>
                <button 
                className="button-contact">Contact</button>
            </a>
        </div>
    )

}

export default NavBar;
