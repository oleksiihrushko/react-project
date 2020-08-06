import React from 'react';
import shortid from 'shortid';
import SummaryItem from './SummaryItem';
import s from './Summary.module.css';

const OperationSummary = ({ data, setOperationsData }) => {
  return (
    <div className={s.summary}>
      <p className={s.summaryListHeading}>Сводка</p>
      <ul className={s.summaryList}>
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
