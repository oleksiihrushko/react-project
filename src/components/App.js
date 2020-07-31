import React, { Suspense } from "react";
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

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/contacts" component={ContactsPage} />
    <Route  path="/TotalCostsSumAndIncomeSum" component={TotalCostsSumAndIncomeSum}/>
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
      <OperationList />
      <IncomeList />
    </BrowserRouter>
  );
};

export default App;



