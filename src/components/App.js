import React, { Suspense, useEffect } from 'react';
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

import { useDispatch } from 'react-redux';
import { getDataOnInit } from '../redux/finance/financeOperations';

import Footer from "./Footer/Footer"
import Header from './header/Header';
// import Modal from "../components/modal/Modal";
// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";
import OperationList from './operationList/OperationList';

import IncomeList from '../incomeList/IncomeList';
import OperationForm from './addOperationForm/AddOperationForm';

import StaticticsPage from '../Pages/statisticsPage/StatisticsPage';

import HomePage from '../Pages/homePage/HomePage';
const App = () => {
  // !!вставить в страницу operationsPage, только после авторизации!!
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataOnInit());
    return;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
      {/* <BallanceRedactor/>
      <OperationForm />
      <OperationList />
      <IncomeList />
      <CategoriesFilter/>
      <Chart /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
