import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import routes from '../routes';

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

// import Modal from "../components/modal/Modal";
// import OperationList from "./operationList/OperationList";
// import Header from "./header/Header";
// import ContactsPage from '../Pages/teamPage/TeamPage';
import HomePage from '../Pages/homePage/HomePage';
import { useDispatch } from 'react-redux';
import { getDataOnInit } from '../redux/finance/financeOperations';

// import PrivateRoute from "../services/PrivateRoute";
// import PublicRoute from "../services/PublicRoute";

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
          {/* <Route  path="/contacts" component={ContactsPage}/> */}
        </Switch>
        <Route path="/" component={HomePage} />
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
      {/* <OperationList/> */}
    </BrowserRouter>
  );
};

export default App;
