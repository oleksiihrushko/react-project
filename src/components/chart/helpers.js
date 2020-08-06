export const backgroundColor = [
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 129, 45, 0.3)',
  'rgba(255, 129, 45, 0.3)',
];

export const monthNameToNum = monthName => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months.indexOf(monthName);
  return month ? month : 0;
};

export const getCurrency = currency => {
  switch (currency) {
    case 'UAH':
      return '₴';

    case 'USD':
      return '$';

    case 'EUR':
      return '€';

    default:
      return '';
  }
};

export const getRate = (rates, currency) =>
  rates.filter(rate => {
    if (rate.ccy === currency) {
      // console.log(rate.buy);
      return rate.buy;
    }
  });

export const calculateHeight = chartData => {
  if (!chartData.labels) return;

  let length = chartData.labels ? chartData.labels.length : 0;

  return length * 80;
};
