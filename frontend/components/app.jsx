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
import home_page from './home_page/home_page'

const App = () => (

    <div className="outer-container">
        <div className="inner-container">
            <h1>hello</h1>
            <Route exact path="/" component={home_page}/>
        </div>
    </div>

)

export default App; 
