import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Films from '../pages/Films';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/films" component={Films} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
