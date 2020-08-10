import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ballanceRedactor.module.css';
import GoToStatsButton from './GoToStatsButton/GoToStatsButton';
import { addBalance } from '../../../redux/finance/financeOperations';

const BallanceRedactor = () => {
  // const [isFirstTransaction, setisFirstTransaction] = useState(true);
  // const income = useSelector((state) => state.operations.income);
  // const costs = useSelector((state) => state.operations.costs);
  // if (income.length !== 0 && costs.length !== 0 && balance !== 0) {
  //   setisFirstTransaction(false);
  // }
  const [isEditing, setEditing] = useState(false);
  const balance = useSelector(state => state.operations.balance);
  const [value, setValue] = useState(balance);

  const dispatch = useDispatch();

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
    if (value !== 0) {
      const newValue = value - balance;
      dispatch(addBalance({ amount: newValue }));
      setValue('');
      togleEdit();
    }
  };

  // const exchangeRates = useSelector(
  //   state => state.exchangeRatesRoot.exchangeRates,
  // );
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
    <section
      className={`${styles.flex} ${styles.wrapper}  ${styles.secPad}  container`}
    >
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
                value={value}
                onChange={handleChange}
              />
              <button
                type="submit"
                className={`${styles.flex} ${styles.btn} ${styles.btnToSubmit}`}
              >
                подтвердить
              </button>
            </form>
          ) : (
            <div className={styles.flex}>
              <p className={styles.value}>
                {ballanceExchange(currentCurrency, balance)} {currentCurrency}
              </p>
              <button
                type="button"
                className={`${styles.flex} ${styles.btn}`}
                onClick={() => togleEdit()}
              >
                изменить
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BallanceRedactor;
