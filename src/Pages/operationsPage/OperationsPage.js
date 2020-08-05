import React, { useEffect, useState, Fragment } from "react";
import Media from "react-media";
import { useSelector, useDispatch } from "react-redux";
import OperationsHeader from "../../components/operationsHeader/OperationsHeader";
import AddOperationForm from "../../components/addOperationForm/AddOperationForm";
import OperationList from "../../components/operationList/OperationList";
import authSelectors from "../../redux/auth/authSelectors";
import { getDataOnInit } from "../../redux/finance/financeOperations";
import api from "../../services/api";
import IncomeList from "../../incomeList/IncomeList";
import MobileList from "../../components/mobileList/MobileList";

const OperationsPage = () => {
  const token = useSelector((state) => authSelectors.token(state));
  const [operationType, setOperation] = useState("credit");
  const dispatch = useDispatch();
  const costs = useSelector((state) => state.operations.costs);
  const income = useSelector((state) => state.operations.income);

  const operations = [...costs, ...income].sort((a, b) => {
    const aa = Number(
      a.date.slice(0, 4) +
        a.date.slice(5, 7) +
        a.date.slice(8, 10) +
        a.date.slice(11, 13) +
        a.date.slice(14, 16) +
        a.date.slice(17, 19)
    );

    const bb = Number(
      b.date.slice(0, 4) +
        b.date.slice(5, 7) +
        b.date.slice(8, 10) +
        b.date.slice(11, 13) +
        b.date.slice(14, 16) +
        b.date.slice(17, 19)
    );
    return aa - bb;
  });

  useEffect(() => {
    if (token) {
      api.token.set(token);
    }
    dispatch(getDataOnInit());
    return;
  }, []);

  return (
    <div>
      <OperationsHeader />
      <AddOperationForm
        operationType={operationType}
        setOperation={setOperation}
      />

      <Media
        queries={{
          small: "(min-width: 320px) and (max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1023px)",
          large: "(min-width: 1024px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small ? (
              <MobileList operations={operations} />
            ) : operationType === "credit" ? (
              <OperationList />
            ) : (
              <IncomeList />
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default OperationsPage;
