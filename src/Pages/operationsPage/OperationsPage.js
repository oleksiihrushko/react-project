import React from "react";
import OpreationsHeader from "../../components/operationsHeader/OperationsHeader";
import AddOperationForm from "../../components/addOperationForm/AddOperationForm";
import OperationList from "../../components/operationList/OperationList";
const OperationsPage = () => {
  return (
    <div>
      <OpreationsHeader />
      <AddOperationForm />
      <OperationList />
    </div>
  );
};

export default OperationsPage;
