import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
// import routes from '../routes';

// import PrivateRoute from '../services/PrivateRoute';
// import PublicRoute from '../services/PublicRoute';
import HomePage from '../Pages/homePage/HomePage'

const App = () => {
  return (
<BrowserRouter>
  <Suspense fallback={<h1>Loading...</h1>}>
  <Switch>
    <Route path="/" exact component={HomePage} />
    {/* {routes.map(route => {
      return route.private ? (
        <PrivateRoute key={route.label} {...route} />
      ) : (
        <PublicRoute
          key={route.label}
          {...route}
          restricted={route.restricted}
        />
      );
    })}
    <Redirect to="/login" /> */}
  </Switch>
  </Suspense>
</BrowserRouter>
  );
};

export default App;



