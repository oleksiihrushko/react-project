const getLoading = state => state.exchangeRatesRoot.loading;
const getExchangeRates = state => state.exchangeRatesRoot.exchangeRates;

export default {
    getLoading,
    getExchangeRates
}