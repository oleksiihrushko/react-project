import moment from 'moment';


export const ballanceExchange = (
    exchangeRatesUSD,
    exchangeRatesEUR,
    currentCurrency,
    balance,
  ) => {
    switch (currentCurrency) {
      case 'USD':
        return Math.round(balance / exchangeRatesUSD);
      case 'EUR':
        return Math.round(balance / exchangeRatesEUR);
      default:
        return balance;
        }
  };
 export const getFilteredDate = (allCosts, dateToFilter) =>
    allCosts.filter(costs => {
      // data to Filter
      const monthToFilter = Number(moment(dateToFilter).format('D'));
      const yearToFilter = Number(moment(dateToFilter).format('Y'));
      const allDates = moment(costs.date).format();
      const currentMonthTarcsaction = Number(moment(allDates).format('M'));
      const currentYaerarcsaction = Number(moment(allDates).format('Y'));
      if (
        monthToFilter === currentMonthTarcsaction &&
        yearToFilter === currentYaerarcsaction
      ) {
        return true;
      }
    });





  // const dateParce = dateToFilter.split('.').map(i => Number(i));
  // const monthToFilter = dateParce[1];
  // const yearToFilter = dateParce[2];

//   const getFilteredDate = allCosts.filter(costs => {
//     const allDates = costs.date;
//     const dataTarcsaction = new Date(allDates);
//     const currentMonthTarcsaction = dataTarcsaction.getMonth() + 1;
//     const currentYaerarcsaction = dataTarcsaction.getFullYear();

//     if (
//       monthToFilter === currentMonthTarcsaction &&
//       yearToFilter === currentYaerarcsaction
//     ) {
//       return true;
//     }
//   });



  // console.log('Object.values total', Object.values(total))
  // const onShow = Object.values(total).reduce((acc, item) => {
  //   console.log('item', item);
  //   if (!isNaN(item) ) {
  //     acc += item;
  //   }