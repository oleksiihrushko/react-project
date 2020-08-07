import React from 'react';
import cart from '../../operationList/icons/delete.png';
import styles from './OneIncome.module.css';
import { useSelector } from 'react-redux';

const OneIncome = ({
  operation: { incomeId, amount, date },
  setId,
  openModal,
}) => {
  const exchangeRatesUSD = Number(
    useSelector(state => state.exchangeRatesRoot.exchangeRates[0]?.buy),
  );
  const exchangeRatesEUR = Number(
    useSelector(state => state.exchangeRatesRoot.exchangeRates[1]?.buy),
  );
  const currentCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );
  const ballanceExchange = (currentCurrency, balance) => {
    if (currentCurrency === 'USD')
      return Math.floor(balance / exchangeRatesUSD);
    if (currentCurrency === 'EUR')
      return Math.floor(balance / exchangeRatesEUR);
    if (currentCurrency === 'UAH') return balance;
  };

  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}>{date.slice(0, 10)}</p>
      <p className={styles.category}>Доход</p>
      <p className={styles.price}>
        {ballanceExchange(currentCurrency, amount)} {currentCurrency}
      </p>
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
