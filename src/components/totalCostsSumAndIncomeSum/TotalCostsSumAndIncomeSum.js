import React from 'react';
import PropTypes from 'prop-types';
import s from './TotalCostsSumAndIncomeSum.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment';

const getCostsSum = array =>
  array.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

const filterCosts = (array, year, month1) => {
  console.log('year :>> ', year);
  console.log('month1 :>> ', month1);
  console.log('array :>> ', array);
  return array.filter(item => {
    const startMonth = new Date(year, month1 - 1, 1, 0, 0);
    const endMonth = new Date(year, month1 , 1, 0, 0);
    const res =
      item.date > startMonth.toISOString() &&
      item.date < endMonth.toISOString();
    return res;
  });
};

function TotalCostsSumAndIncomeSum() {
  const costs = useSelector(state => state.operations.costs);
  const income = useSelector(state => state.operations.income);
  const date2 = useSelector(state => state.statistics.month);
  const year = date2.split('.')[2];
  const month = date2.split('.')[1];

  console.log(1111111, date2);

  const filteredCosts =
    date2 && date2 !== 'Invalid date' && filterCosts(costs, year, month);
  const filteredIncome =
    date2 && date2 !== 'Invalid date' && filterCosts(income, year, month);

  const costsSum =
    date2 && date2 !== 'Invalid date' && getCostsSum(filteredCosts);
  const incomeSum =
    date2 && date2 !== 'Invalid date' && getCostsSum(filteredIncome);

  
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
    date2 && (
      <div className={'container'}>
        <div className={s.fon}>
          <div className={s.wrapper}>
            <div className={s.column}>
              <p className={s.stat_title}>Расходы:</p>
              <p className={s.stat_exp}>-{ballanceExchange( currentCurrency,costsSum)} {currentCurrency}</p>
            </div>
            <div className={s.separate} />
            <div className={s.column}>
              <p className={s.stat_title}>Доходы:</p>
              <p className={s.stat_inc}>{ballanceExchange( currentCurrency,incomeSum)} {currentCurrency}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

TotalCostsSumAndIncomeSum.propTypes = {
  costsSum: PropTypes.number.isRequired,
  incomeSum: PropTypes.number.isRequired,
};

export default TotalCostsSumAndIncomeSum;