import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Topics from './pages/Topics';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/home" /> 
            <Route component={Topics} path="/topics"/> 
        </BrowserRouter>
    )
}

export default Routes;