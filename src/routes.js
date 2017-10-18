import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
// import Landing from './Containers/Landing';
import Login from './Containers/Login';
import Blackjack from './Containers/Blackjack'
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path='/blackjack' component={Blackjack} />
    <Route component={NotFound} />
  </Switch>
);
