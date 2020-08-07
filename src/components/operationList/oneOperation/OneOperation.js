import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-media';
import cart from '../icons/delete.png';
import styles from './OneOperation.module.css';

const OneOperation = ({
  operation: { amount, date, product, forDeleteId, costsId },
  setId,
  openModal,
}) => {
  const deleteCosts = (id, xId) => {
    setId([id, xId]);
    openModal();
  };

  const lengthOneOperation = () => {
    if (product?.name.length > 22) {
      return product?.name.slice(0, 22) + '...';
    } else {
      return product?.name;
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
      <div className={styles.operation}>
        <p className={styles.operationProduct}>
          {
            <Media
              queries={{
                medium: '(min-width: 768px) and (max-width: 1023px)',
                large: '(min-width: 1024px)',
              }}
            >
              {matches => (
                <Fragment>
                  {matches.medium && lengthOneOperation()}
                  {matches.large && lengthOneOperation()}
                </Fragment>
              )}
            </Media>
          }
        </p>
        <p className={styles.date}>{date.slice(0, 10)}</p>
      </div>
      <p className={styles.category}>{product?.category.name}</p>
      <p className={styles.price}>
        -{ballanceExchange(currentCurrency, amount)} {currentCurrency}
      </p>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteCosts(forDeleteId, costsId)}
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

export default OneOperation;
