import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// containers
import AppContainer from '../../client/ui/containers/AppContainer.js';
import MainContainer from '../../client/ui/containers/MainContainer.js';

// pages

import SignupPage from '../../client/ui/pages/SignupPage.js';
import NotFoundPage from '../../client/ui/pages/NotFoundPage.js';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>

      <Route path="login" component={SignupPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);