import React from 'react';
import {Provider} from 'react-redux';
import {IndexRoute, Router} from 'react-router';
import {Route} from 'react-router-dom';

/* Router dependencies preparing */
import {history, store} from './prepare';

/* App configs */
import config from './config';

/* Components */
import {Layout, NotFound} from './components';
import Home from './components/home/home';

/* Routes */
const {urlPrefix} = config;
const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path={urlPrefix} component={Layout}>
          <IndexRoute component={Home}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>
  );
};

export default Routes;
