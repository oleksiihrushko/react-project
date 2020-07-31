import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import OperationList from './operationList/OperationList';

import ContactsPage from '../Pages/teamPage/TeamPage';
// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";
import OperationList from './operationList/OperationList';
import Header from './header/Header';

import HomePage from '../Pages/homePage/HomePage';
import IncomeList from '../incomeList/IncomeList';
import OperationForm from './addOperationForm/AddOperationForm';

import StaticticsPage from '../Pages/statisticsPage/StatisticsPage';
import Header from './header/Header';
import HomePage from '../Pages/homePage/HomePage';
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/statictics" component={StaticticsPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Suspense>
      <OperationForm />
      <OperationList />
      <IncomeList />
    </BrowserRouter>
  );
};

export default App;
