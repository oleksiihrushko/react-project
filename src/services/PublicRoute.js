import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, restricted, ...routeProps }) => {
  const isAuthenticated = useSelector(state => state.auth.token);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && restricted ? (
          <Redirect to="/operations" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
