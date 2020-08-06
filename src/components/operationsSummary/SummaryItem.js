import React from 'react';
import s from './Summary.module.css';

const SummaryItem = ({ data, setOperationsData }) => {
  const date = new Date(data[0], data[1], 1);
  const monthLocale = date.toLocaleString('en-us', { month: 'long' });

  return (
    <>
      <li
        className={s.summaryListItem}
        onClick={() => {
          console.log('data[3] :>> ', data[3]);
          setOperationsData(data[3]);
        }}
      >
        <p className={s.summaryListItemMonth}>{monthLocale}</p>
        <p className={s.summaryListItemSum}>{data[2]}</p>
      </li>
    </>
  );
};

export default SummaryItem;
