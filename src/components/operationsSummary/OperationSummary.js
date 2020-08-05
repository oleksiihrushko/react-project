import React from 'react';
import shortid from 'shortid';
import SummaryItem from './SummaryItem';

const OperationSummary = ({ data }) => {
  return (
    <div className="summary">
      <p className="summaryListHeading">Сводка</p>
      <ul className="summaryList">
        {data.map((item) => (
          <SummaryItem key={shortid.generate()} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default OperationSummary;
