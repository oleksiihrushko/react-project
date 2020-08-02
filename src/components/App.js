import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import routes from '../routes';

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";


// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";
// import Modal from "../components/modal/Modal";
import OperationList from "./operationList/OperationList";
import Header from "./header/Header";
import ContactsPage from "../Pages/teamPage/TeamPage";
import HomePage from "../Pages/homePage/HomePage";
import IncomeList from "../incomeList/IncomeList";
import OperationForm from "./addOperationForm/AddOperationForm";
import Chart from "../components/chart/Chart";

import Footer from "./Footer/Footer";
const App = () => {
  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2.init({
        client_id: '460326880610-0ski7kotqh77ijrc6cg9t0eusr3dfict',
      });
    });
    return;
  }, []);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>

          <Route path="/contacts" component={ContactsPage} />
          {/* <Route  path="/TotalCostsSumAndIncomeSum" component={TotalCostsSumAndIncomeSum}/> */}
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
      <OperationForm />
      <OperationList />
      <IncomeList />
      <Footer />
      <Chart />
    </BrowserRouter>
  );
};

export default App;
