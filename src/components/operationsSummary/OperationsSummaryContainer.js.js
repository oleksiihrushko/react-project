import React, { useState } from 'react';
import OperationSummary from './OperationSummary';
import { useSelector } from 'react-redux';

const OperationSummaryContainer = () => {
  const [summary, setSummary] = useState([
    { март: 100 },
    { арель: 56 },
    { май: 33 },
    { июнь: 11 },
    { июль: 42 },
    { август: 98 },
  ]);

  const now = new Date();
  const periodMs = 6 * 30 * 24 * 60 * 60 * 1000;
  const pastMs = Date.parse(now) - periodMs;
  const past = new Date(pastMs);
  const costs = useSelector((state) => state.operations.costs);
  const filteredCosts = costs.filter((item) => {
    // console.log('item :>> ', item.date);
    // console.log('past :>> ', past.toISOString());
    return item.date > past.toISOString();
  });
  // console.log('costs :>> ', costs);
  console.log('filteredCosts :>> ', filteredCosts);

  return <OperationSummary data={summary} />;
};

export default OperationSummaryContainer;
