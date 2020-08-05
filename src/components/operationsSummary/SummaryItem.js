import React from 'react';

const SummaryItem = ({ data, setOperationsData }) => {
  const date = new Date(data[0], data[1], 1);
  const monthLocale = date.toLocaleString('en-us', { month: 'long' });

  return (
    <>
      <li
        className="summaryListItem"
        onClick={() => {
          console.log('data[3] :>> ', data[3]);
          setOperationsData(data[3]);
        }}
      >
        <p className="summaryListItemMonth">{monthLocale}</p>
        <p className="summaryListItemSum">{data[2]}</p>
      </li>
    </>
  );
};

export default SummaryItem;
