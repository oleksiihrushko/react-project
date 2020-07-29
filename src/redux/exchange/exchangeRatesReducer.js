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

export default combineReducers({
    exchangeRates,
    loading,
})