import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Hero from '../pages/Hero';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Hero} />
    <Route path="/about/:id" component={Details} />
  </Switch>
);

export default Routes;
