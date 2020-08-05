import React from 'react';

const SummaryItem = ({ data }) => {
  const item = Object.entries(data);
  return (
    <>
      <li className="summaryListItem">
        <p className="summaryListItemMonth">{item[0]}</p>
        <p className="summaryListItemSum">{item[1]}</p>
      </li>
    </>
  );
};

export default SummaryItem;
