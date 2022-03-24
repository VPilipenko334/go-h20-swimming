import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
// import SessionForm from './session_form/session_forms';
import Welcome_page from './welcome_page/Welcome_page'
import ContactForm from './contact_form/contact_form'
import AboutUs from './about_us/about_us';
import Lessons from './lessons/lessons';
import Prices from './prices/prices';
import Careers from './careers/careers';

const App = () => (
    <div className="outer-container">
        <div className="inner-container">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Welcome_page} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/lessons" component={Lessons} />
                <Route exact path="/prices" component={Prices} />
                <Route exact path="/careers" component={Careers} />
            </Switch>
            {/* <SessionForm /> */}
            {/* <Home_page />  */}
        </div>
    </div>

)

export default App; 
