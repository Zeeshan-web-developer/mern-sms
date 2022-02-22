import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { userRoutes, authRoutes, coursesRoutes } from './constants';
const Routes = () => {
  return (
    <Router>
      <Switch>
        {userRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        {authRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        {coursesRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </Router>
  );
};
export default Routes;
