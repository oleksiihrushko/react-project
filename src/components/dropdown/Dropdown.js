import React, { useEffect } from 'react';
import styles from './dropDown.module.css';

const Dropdown = ({ filteredProducts, handleClick, setFilteredProducts }) => {
  const onDropdownClose = () => {
    setFilteredProducts([]);
  };

  useEffect(() => {
    window.addEventListener('click', onDropdownClose);
    return () => {
      window.addEventListener('click', onDropdownClose);
    };
  });

  return (
    <ul className={styles.costsInput__dropdown}>
      {filteredProducts.map(item => (
        <li
          key={item._id}
          className={styles.dropdownItem}
          data-id={item._id}
          onClick={() => {
            handleClick(item.name);
          }}
        >
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
