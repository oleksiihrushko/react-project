<<<<<<< HEAD
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

=======
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";


// import Modal from "../components/modal/Modal";
import OperationList from "./operationList/OperationList";
import Header from "./header/Header";
import ContactsPage from '../Pages/teamPage/TeamPage';
import HomePage from '../Pages/homePage/HomePage'
import IncomeList from "../incomeList/IncomeList";

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";
>>>>>>> 7dbcfff2fe7c30d0838972590f41da6fd788ec0f
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <TotalCostsSumAndIncomeSum /> */}
        <Switch>
<<<<<<< HEAD
=======
          <Route path="/contacts" component={ContactsPage} />
    <Route  path="/TotalCostsSumAndIncomeSum" component={TotalCostsSumAndIncomeSum}/>
        </Switch>
        {/* <Switch>
>>>>>>> 7dbcfff2fe7c30d0838972590f41da6fd788ec0f
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
      </Suspense>
<<<<<<< HEAD
      <Footer />
=======
      <OperationList />
      <IncomeList />
>>>>>>> 7dbcfff2fe7c30d0838972590f41da6fd788ec0f
    </BrowserRouter>
  );
};

export default App;
