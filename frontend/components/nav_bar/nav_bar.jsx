import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className='nav-bar-outer'>
            <div className="nav-bar-links">
                <Link to="/">Home</Link>
                    &nbsp;
                <Link to="/aboutus">About Us</Link>
                    &nbsp;
                <Link to="/lessons">Swim Lesson Types</Link>
                    &nbsp;
                <Link to="/prices">Prices</Link>
                    &nbsp;
                <Link to="/careers">Careers</Link>
                    &nbsp;
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    )

}

export default NavBar;
