import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Topics from './pages/Topics';
import Minecraft from './pages/Minecraft';
import Staff from './pages/Staff';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/home" /> 
            <Route component={Topics} path="/topics"/> 
            <Route component={Minecraft} path="/minecraft"/> 
            <Route component={Staff} path="/staff"/> 
        </BrowserRouter>
    )
}

export default Routes;