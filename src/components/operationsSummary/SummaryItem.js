import React from 'react';

const SummaryItem = ({ data }) => {
  const date = new Date(data[0], data[1], 1);
  const monthLocale = date.toLocaleString('en-us', { month: 'long' });

  return (
    <>
      <li className="summaryListItem">
        <p className="summaryListItemMonth">{monthLocale}</p>
        <p className="summaryListItemSum">{data[2]}</p>
      </li>
    </>
  );
};

export default SummaryItem;
