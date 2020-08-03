import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import routes from '../routes';

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

// import Modal from "../components/modal/Modal";
// import OperationList from "./operationList/OperationList";
// import Header from "./header/Header";
// import ContactsPage from '../Pages/teamPage/TeamPage';
import { useDispatch } from 'react-redux';
import { getDataOnInit } from '../redux/finance/financeOperations';

// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";
// import Modal from "../components/modal/Modal";
import OperationList from './operationList/OperationList';
import Header from './header/Header';
import ContactsPage from '../Pages/teamPage/TeamPage';
import HomePage from '../Pages/homePage/HomePage';
import IncomeList from '../incomeList/IncomeList';
import OperationForm from './addOperationForm/AddOperationForm';
import Chart from '../components/chart/Chart';

const App = () => {
  // !!вставить в страницу operationsPage, только после авторизации!!
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataOnInit());
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
      <Chart />
    </BrowserRouter>
  );
};

export default App;
