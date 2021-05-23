import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Hero from '../pages/Hero';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Hero} />
  </Switch>
);

export default Routes;
