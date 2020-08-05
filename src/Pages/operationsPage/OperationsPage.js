import React, { useEffect, useState } from "react";
import OperationsHeader from "../../components/operationsHeader/OperationsHeader";
import AddOperationForm from "../../components/addOperationForm/AddOperationForm";
import OperationList from "../../components/operationList/OperationList";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import { getDataOnInit } from "../../redux/finance/financeOperations";
import api from "../../services/api";
import IncomeList from "../../incomeList/IncomeList";

const OperationsPage = () => {
  const token = useSelector((state) => authSelectors.token(state));
  const [operationType, setOperation] = useState("credit");
  const dispatch = useDispatch();

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
      {operationType === "credit" ? <OperationList /> : <IncomeList />}
    </div>
  );
};

export default OperationsPage;
