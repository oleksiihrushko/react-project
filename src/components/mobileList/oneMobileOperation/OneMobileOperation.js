import React from 'react';
import { useSelector } from 'react-redux';
import cart from '../../operationList/icons/delete.png';
import styles from './OneMobileOperation.module.css';

const OneMobileOperation = ({ operation, setId, openModal }) => {
  const deleteOperation = (type, id, xId) => {
    if (type === 'cost') {
      setId([type, id, xId]);
    } else {
      setId([type, id]);
    }
    openModal();
  };

  const lengthOneMobileOperation = () => {
    if (operation.product?.name.length > 15) {
      return operation.product?.name.slice(0, 15) + '...';
    } else {
      return operation.product?.name;
    }
  };
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
      <div className={styles.mobileDate}>
        <p className={styles.category}>
          {operation.costsId ? lengthOneMobileOperation() : 'Доход'}
        </p>
        <p className={styles.date}>{operation.date.slice(0, 10)}</p>
      </div>
      {operation.costsId ? (
        <p className={styles.priceCost}>
          -{ballanceExchange(currentCurrency, operation.amount)}{' '}
          {currentCurrency}
        </p>
      ) : (
        <p className={styles.priceIncome}>
          {ballanceExchange(currentCurrency, operation.amount)}{' '}
          {currentCurrency}
        </p>
      )}

      <button
        type="button"
        className={styles.btnDelete}
        onClick={() =>
          operation.costsId
            ? deleteOperation('cost', operation.forDeleteId, operation.costsId)
            : deleteOperation('income', operation.incomeId)
        }
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

export default OneMobileOperation;
