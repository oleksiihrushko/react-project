import React, { useState, useEffect } from 'react';
import OperationSummary from './OperationSummary';
import { useSelector } from 'react-redux';
import { makeSummary } from '../../services/helpers';

const OperationSummaryContainer = () => {
  const [summary, setSummary] = useState([]);
  const costs = useSelector((state) => state.operations.costs);

  useEffect(() => {
    if (costs.length > 0) {
      const data = makeSummary(costs);
      setSummary(data);
    }
  }, [costs]);

  console.log('summary :>> ', summary);
  return <OperationSummary data={summary} />;
};

export default OperationSummaryContainer;
