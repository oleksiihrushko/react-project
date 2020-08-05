import React, { useState, useEffect } from 'react';
import OperationSummary from './OperationSummary';
import { useSelector } from 'react-redux';
import { makeSummary } from '../../services/helpers';

const OperationSummaryContainer = ({ operationsType }) => {
  const [summary, setSummary] = useState([]);
  const costs = useSelector((state) => state.operations.costs);
  const income = useSelector((state) => state.operations.income);
  const operations = operationsType ? costs : income;
  console.log('income :>> ', income);
  console.log('costs :>> ', costs);
  console.log('operationsType :>> ', operationsType);

  useEffect(() => {
    if (operations.length > 0) {
      const data = makeSummary(operations);
      setSummary(data);
    }
  }, [operations]);

  console.log('summary :>> ', summary);
  return <OperationSummary data={summary} />;
};

export default OperationSummaryContainer;
