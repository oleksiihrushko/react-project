import React, { useState } from 'react';
import OperationsHeader from '../../components/operationsHeader/OperationsHeader';
import AddOperationForm from '../../components/addOperationForm/AddOperationForm';
import OperationList from '../../components/operationList/OperationList';
const OperationsPage = () => {
  const [operationType, setOperation] = useState('credit');
  return (
    <div>
      <OperationsHeader />
      <AddOperationForm type={operationType} setOperation={setOperation} />
      <OperationList type={operationType} />
    </div>
  );
};

export default OperationsPage;
