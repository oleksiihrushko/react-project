import React from 'react';
import cart from '../components/operationList/icons/delete.png';
import styles from './OneIncome.module.css';

const OneIncome = ({
  operation: { incomeId, amount, date },
  setId,
  openModal,
}) => {
  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>
        {date.slice(0, 10) + ' ' + date.slice(11, 19)}
      </p>
      <p className={styles.category}>Доход</p>
      <p className={styles.price}>{amount} грн</p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => {
          setId(incomeId);
          openModal();
        }}
      >
        <img
          src={cart}
          alt="delete"
          width={30}
          className={styles.imgOperation}
        />
      </button>
    </li>
  );
};

export default OneIncome;
