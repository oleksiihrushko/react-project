import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import routes from '../routes';

// import PrivateRoute from '../services/PrivateRoute';
// import PublicRoute from '../services/PublicRoute';
import StaticticsPage from '../Pages/statisticsPage/StatisticsPage';
import Header from './header/Header';
import HomePage from '../Pages/homePage/HomePage';
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/statictics" component={StaticticsPage} />
        </Switch>
        {/* <Switch>
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
          <Redirect to="/login" />
        </Switch> */}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
