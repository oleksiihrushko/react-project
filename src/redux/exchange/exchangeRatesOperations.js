import exchangeRatesActions from './exchangeRatesActions';
import axios from 'axios';

const privat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const fetchCurrentExchangeRates = () => dispatch => {
  console.log('fetch');
  dispatch(exchangeRatesActions.fetchExhcangeRatesRequest());

  axios
    .get(privat)
    .then(({ data }) =>
      dispatch(exchangeRatesActions.fetchExhcangeRatesSuccess(data)),
    )
    .catch(error =>
      dispatch(exchangeRatesActions.fetchExhcangeRatesError(error)),
    );
};

export default {
  fetchCurrentExchangeRates,
};
