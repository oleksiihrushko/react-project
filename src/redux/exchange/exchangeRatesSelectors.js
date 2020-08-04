import { createSelector } from '@reduxjs/toolkit';


const getExchangeRates = state => state.exchangeRatesRoot.exchangeRates;
const getCurrency = state => state.exchangeRatesRoot.exchangeCurrency;

const getCurrentCurrency = createSelector(
  [getExchangeRates, getCurrency],

  (exchangeRatesRoot, exchangeCurrency) => {
    return exchangeRatesRoot.filter(({ ccy }) => {
      return ccy === exchangeCurrency;
    });
  },
);

export default {

  getExchangeRates,
  getCurrentCurrency,
};
