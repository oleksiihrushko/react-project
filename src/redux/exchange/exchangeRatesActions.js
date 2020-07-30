import { createAction } from '@reduxjs/toolkit';

const fetchExhcangeRatesRequest = createAction("exchangeRates/FETCH_REQUEST");
const fetchExhcangeRatesSuccess = createAction("exchangeRates/FETCH_SUCCESS");
const fetchExhcangeRatesError = createAction("exchangeRates/FETCH_ERROR");

const exchangeCurrency = createAction("exchangeCurrency");

const currentCurrencyUAH = createAction('currentCurrencyUAH');
const currentCurrencyUSA = createAction('currentCurrencyUSA');
const currentCurrencyEUR = createAction('currentCurrencyEUR');
const currentCurrencyBTC = createAction('currentCurrencyBTC');


export default {
    fetchExhcangeRatesRequest,
    fetchExhcangeRatesSuccess,
    fetchExhcangeRatesError,
    exchangeCurrency,
    currentCurrencyUAH,
    currentCurrencyUSA,
    currentCurrencyEUR,
    currentCurrencyBTC,
}