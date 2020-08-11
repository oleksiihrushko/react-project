import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ballanceRedactor.module.css';
import GoToStatsButton from './GoToStatsButton/GoToStatsButton';
import { addBalance } from '../../../redux/finance/financeOperations';
// import { useFormik } from 'formik';ы
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
  // console.log('currentCurrency', currentCurrency)
  const [isEditing, setEditing] = useState(false);
  const balance = useSelector(state => state.operations.balance);

  const [value, setValue] = useState(balance);
  // console.log('currentCurrency', currentCurrency);
  // console.log('value', value)
  // console.log('newValue', newValue)
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
      const newValue = value - balance;
      // switch (currentCurrency) {
      //   case 'USD':
      //     console.log('111', 111);
      //     const valueUSD = Math.floor(newValue * exchangeRatesUSD);
      //     console.log('valueUSD', valueUSD);
      //     dispatch(addBalance({ amount: valueUSD }));
      //     setValue('');
      //     togleEdit();
      //     return;
      //   case 'EUR':
      //     dispatch(
      //       addBalance({ amount: Math.round(newValue * exchangeRatesEUR) }),
      //     );
      //     setValue('');
      //     togleEdit();
      //     return;
      //   default:
      //     dispatch(addBalance({ amount: newValue }));
      // }
      dispatch(addBalance({ amount: newValue }));
      setValue('');
      togleEdit();
    }
  };

  const exchangeRatesUSD = Number(exchangeRates[0]?.buy);
  const exchangeRatesEUR = Number(exchangeRates[1]?.buy);
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
