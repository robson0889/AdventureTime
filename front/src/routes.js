import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Place from './pages/Place';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/places" component={Place}/>
            </Switch>        
        </BrowserRouter>
    );
}