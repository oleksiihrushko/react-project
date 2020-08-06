import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  // Route,
  // Link,
  // NavLink,
} from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';
import Header from './header/Header';
import Footer from './Footer/Footer';
import { CommonLoading } from 'react-loadingg';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<CommonLoading color='orange' size='large' />}>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        {/* <TotalCostsSumAndIncomeSum /> */}
        <Switch>
          {routes.map(route => {
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
          <Redirect to="/" />
        </Switch>
      <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
