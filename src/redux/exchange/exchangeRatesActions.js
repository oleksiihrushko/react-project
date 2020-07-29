import { createAction } from '@reduxjs/toolkit';

const fetchExhcangeRatesRequest = createAction("exchangeRates/FETCH_REQUEST");
const fetchExhcangeRatesSuccess = createAction("exchangeRates/FETCH_SUCCESS");
const fetchExhcangeRatesError = createAction("exchangeRates/FETCH_ERROR");

export default {
    fetchExhcangeRatesRequest,
    fetchExhcangeRatesSuccess,
    fetchExhcangeRatesError,
}