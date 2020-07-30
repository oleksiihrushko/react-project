import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

import Modal from "../components/modal/Modal";
import OperationList from "./operationList/OperationList";
import IncomeList from "../incomeList/IncomeList";

// import Header from "./header/Header";
import ContactsPage from "../Pages/teamPage/TeamPage";

import PrivateRoute from "../services/PrivateRoute";
import PublicRoute from "../services/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/contacts" component={ContactsPage} />
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
