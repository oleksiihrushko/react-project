import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import exchangeRatesActions from "./exchangeRatesActions";


const exchangeRates = createReducer([], {
    [exchangeRatesActions.fetchExhcangeRatesSuccess]: (state, action) => action.payload,
} )

const loading = createReducer(false, {
    [exchangeRatesActions.fetchExhcangeRatesRequest]: ()=> true,
    [exchangeRatesActions.fetchExhcangeRatesSuccess]: ()=> false,
    [exchangeRatesActions.fetchExhcangeRatesError]: ()=> false,
})

const exchangeCurrency = createReducer("UAH", {
    [exchangeRatesActions.currentCurrencyUAH]: () => "UAH",
    [exchangeRatesActions.currentCurrencyUSA]: () => "USD",
    [exchangeRatesActions.currentCurrencyEUR]: () => "EUR",
    // [exchangeRatesActions.currentCurrencyBTC]: () => "BTC",
}
)

export default combineReducers({
    exchangeRates,
    loading,
    exchangeCurrency,
})