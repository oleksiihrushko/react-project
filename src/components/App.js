import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import OperationList from "./operationList/OperationList";

import ContactsPage from '../Pages/teamPage/TeamPage';

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
            <Route  path="/contacts" component={ContactsPage}/>
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
      <OperationList/>
    </BrowserRouter>
  );
};

export default App;
