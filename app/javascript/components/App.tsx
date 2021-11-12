import React from 'react';
import Home from './HomePage/Home';
import Shop from './Shop/Shop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return ( 
    
    <BrowserRouter>
        <Switch>

            <Route path='/' exact={true}>
                <Home />
            </Route>

            <Route path='/:id'>
                <Shop />
            </Route>
        
        </Switch>

  </BrowserRouter>
    )
}

export default App