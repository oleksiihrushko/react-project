import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

// import TotalCostsSumAndIncomeSum from './totalCostsSumAndIncomeSum/TotalCostsSumAndIncomeSum';
// import routes from "../routes";
import OperationList from "./operationList/OperationList";
import Header from "./header/Header";
import ContactsPage from "../Pages/teamPage/TeamPage";
import HomePage from "../Pages/homePage/HomePage";
import IncomeList from "../incomeList/IncomeList";
import OperationForm from "./addOperationForm/AddOperationForm";

const App = () => {
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
    </BrowserRouter>
  );
};

export default App;
