import exchangeRatesActions from './exchangeRatesActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.privatbank.ua/';

const fetchCurrentExchangeRates = () => dispatch => {
  console.log('fetch');
  dispatch(exchangeRatesActions.fetchExhcangeRatesRequest());

  axios
    .get('/p24api/pubinfo?json&exchange&coursid=5')
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
