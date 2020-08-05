import React, { useEffect, useState } from 'react';
import OperationsHeader from '../../components/operationsHeader/OperationsHeader';
import AddOperationForm from '../../components/addOperationForm/AddOperationForm';
import OperationList from '../../components/operationList/OperationList';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { getDataOnInit } from '../../redux/finance/financeOperations';
import api from '../../services/api';
import OperationSummaryContainer from '../../components/operationsSummary/OperationsSummaryContainer.js';

const OperationsPage = () => {
  const [operationType, setOperation] = useState('credit');
  const token = useSelector((state) => authSelectors.token(state));
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
      <AddOperationForm type={operationType} setOperation={setOperation} />
      <OperationList type={operationType} />
      <OperationSummaryContainer />
    </div>
  );
};

export default OperationsPage;
