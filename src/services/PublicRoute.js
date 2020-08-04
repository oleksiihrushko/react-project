import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/operations" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
