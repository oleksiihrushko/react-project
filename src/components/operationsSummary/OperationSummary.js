import React from 'react';
import shortid from 'shortid';
import SummaryItem from './SummaryItem';
// import s from './Summory.module.css';

const OperationSummary = ({ data, setOperationsData }) => {
  return (
    <div className="summary">
      <p className="summaryListHeading">Сводка</p>
      <ul className="summaryList">
        {data.map((item) => (
          <SummaryItem
            key={shortid.generate()}
            data={item}
            setOperationsData={setOperationsData}
          />
        ))}
      </ul>
    </div>
  );
};

export default OperationSummary;
