import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ballanceRedactor.module.css';
import GoToStatsButton from './GoToStatsButton/GoToStatsButton';
import { addBalance } from '../../../redux/finance/financeOperations';
import { ballanceExchange } from '../../categoriesFilter/currencyExchange';
const BallanceRedactor = () => {
  // const [isFirstTransaction, setisFirstTransaction] = useState(true);
  // const income = useSelector((state) => state.operations.income);
  // const costs = useSelector((state) => state.operations.costs);
  // if (income.length !== 0 && costs.length !== 0 && balance !== 0) {
  //   setisFirstTransaction(false);
  // }
  const dispatch = useDispatch();

  const exchangeRatesRoot = useSelector(state => state.exchangeRatesRoot);
  const exchangeRates = exchangeRatesRoot.exchangeRates;
  const currentCurrency = exchangeRatesRoot.exchangeCurrency;
  const [isEditing, setEditing] = useState(false);
  const balance = useSelector(state => state.operations.balance);

  const exchangeRatesUSD = Number(exchangeRates[0]?.buy);
  const exchangeRatesEUR = Number(exchangeRates[1]?.buy);


  // const [value, setValue] = useState(balance);
  const [value, setValue] = useState(
    ballanceExchange(
      exchangeRatesUSD,
      exchangeRatesEUR,
      currentCurrency,
      balance,
    ),
  );
  useEffect(() => {
    window.addEventListener('keydown', escListener);
    return () => {
      window.removeEventListener('keydown', escListener);
    };
  }, []);

  const togleEdit = () => setEditing(!isEditing);

  const escListener = event => {
    if (event.keyCode === 27) {
      event.keyCode === 27 && setEditing(false);
      setValue('');
    }
  };

  const handleChange = ({ target: { value } }) => {
    if (value.indexOf('.') != '-1') {
      value = value.substring(0, value.indexOf('.') + 0);
    }
    !isNaN(value) && setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value === '') {
      togleEdit();
      return;
    }
    if (value) {
      const newBalance = exchangeRates => balance / exchangeRates;
      const getExchangeBalance = newBalance => value - newBalance;
      const getNewValue = (getExchangeBalance, exchangeRate) => Math.round(getExchangeBalance * exchangeRate);

      const dispath = exchangeRates => {
        dispatch(
          addBalance({
            amount: getNewValue(
              getExchangeBalance(newBalance(exchangeRates)),
              exchangeRates),
          }),
        );
        setValue('');
        togleEdit();
      };

      switch (currentCurrency) {
        case 'USD':
          dispath(exchangeRatesUSD);
          return;
        case 'EUR':
          dispath(exchangeRatesEUR);
          return;
        default:
          const newBalanceUAH = value - balance;
          dispatch(addBalance({ amount: newBalanceUAH }));
          setValue('');
          togleEdit();
      }
    }
  };


  return (
    <section className={`${styles.flex} ${styles.wrapper}  ${styles.secPad}  container`}>

      <GoToStatsButton />

      <div className={`${styles.flex} ${styles.div} `}>
        <p className={`${styles.bal_text}  `}>Баланс:</p>
        <div className={`${styles.flex} ${styles.ballanceWrap}`}>
          {isEditing ? (
            <form onSubmit={handleSubmit} className={styles.flex}>
              <input
                autoFocus
                className={`${styles.flex} ${styles.value} ${styles.inputCor}`}
                type="text"
                value={value}              //не изменяет сумму в зависимости от валюты
                onChange={handleChange}/>
              <button
                type="submit"
                className={`${styles.flex} ${styles.btn} ${styles.btnToSubmit}`}
              >подтвердить</button>
            </form>
          ) : (
            <div className={styles.flex}>
              <p className={styles.value}>
                {ballanceExchange(
                  exchangeRatesUSD,
                  exchangeRatesEUR,
                  currentCurrency,
                  balance,
                )}{' '}
                {currentCurrency}
              </p>
              <button
                type="button"
                className={`${styles.flex} ${styles.btn}`}
                onClick={() => togleEdit()}
              >изменить</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BallanceRedactor;
