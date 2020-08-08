// import { useSelector } from 'react-redux';

// const CurrencyExchange = ({balance}) => {
//   const exchangeRates = useSelector(
//     state => state.exchangeRatesRoot.exchangeRates,
//   );
//   const exchangeRatesUSD = Number(
//     useSelector(state => state.exchangeRatesRoot.exchangeRates[0].buy),
//   );
//   const exchangeRatesEURO = Number(
//     useSelector(state => state.exchangeRatesRoot.exchangeRates[1].buy),
//   );
//   const exchangeRatesRUR = Number(
//     useSelector(state => state.exchangeRatesRoot.exchangeRates[2].buy),
//   );
//   const currentCurrency = useSelector(
//     state => state.exchangeRatesRoot.exchangeCurrency,
//   );

//   const ballanceExchange = (currentCurrency, balance) => {
//     if (currentCurrency === 'USD')
//       return Math.floor(balance / exchangeRatesUSD);
//     // if (currentCurrency === 'EUR')
//     //   return Math.floor(balance / exchangeRatesEUR);
//     if (currentCurrency === 'UAH') return balance;
//   };
// };

// export default CurrencyExchange;
