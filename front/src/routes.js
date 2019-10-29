import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Place from './pages/Place';
import NewPlace from './pages/NewPlace';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/>
                <Route path="/registro" component={Register}/>
                <Route path="/locais" component={Place}/>
                <Route path="/novolocal" component={NewPlace}/>
            </Switch>        
        </BrowserRouter>
    );
}