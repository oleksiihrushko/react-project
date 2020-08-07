import React from 'react';

const DropdownItem = ({ description, id, handleClick }) => {
  return (
    <li
      className="dropdownItem"
      data-id={id}
      onClick={() => handleClick(description)}
    >
      <p>{description}</p>
    </li>
  );
};

export default DropdownItem;
