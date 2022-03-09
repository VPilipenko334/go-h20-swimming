import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';
import Home_page from './home_page/Home_page'

const App = () => (
    <div className="outer-container">
        <div className="inner-container">
            <Home_page /> 
        </div>
    </div>

)

export default App; 
