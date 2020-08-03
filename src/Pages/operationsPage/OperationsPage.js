import React from "react";
import OpreationsHeader from "../../components/operationsHeader/OperationsHeader";
import OpreationsHeader from "../../components/addOperationForm/AddOperationForm";
import OpreationsHeader from "../../components/operationList/OperationList";
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
