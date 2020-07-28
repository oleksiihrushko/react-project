import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import PrivateRoute from "../services/PrivateRoute";
import PublicRoute from "../services/PublicRoute";
import Modal from "../components/modal/Modal";
import OneOperation from "./oneOperation/OneOperation";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
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
      <OneOperation />
    </BrowserRouter>
  );
};

export default App;
