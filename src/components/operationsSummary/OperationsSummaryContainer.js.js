import React, { useState, useEffect } from 'react';
import OperationSummary from './OperationSummary';
import { useSelector } from 'react-redux';
import { makeSummary } from '../../services/helpers';

const OperationSummaryContainer = ({ type, setOperationsData }) => {
  const [summary, setSummary] = useState([]);

  const costs = useSelector((state) => state.operations.costs);
  const income = useSelector((state) => state.operations.income);
  const operations = type === 'debit' ? costs : income;

  useEffect(() => {
    if (operations.length > 0) {
      const data = makeSummary(operations);
      setSummary(data);
    }
  }, [operations]);

  console.log('summary :>> ', summary);
  return (
    <OperationSummary data={summary} setOperationsData={setOperationsData} />
  );
};

export default OperationSummaryContainer;
