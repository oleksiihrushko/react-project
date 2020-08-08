import { useState, useEffect } from 'react';
import { getData } from './chartServices';

export const getFilteredData = (currentCategory, date, products) => {
  const month = date && Array.from(date).splice(3, 2).join('') - 1;
  const year = date && Array.from(date).splice(6, 4).join('');

  return getData(products, currentCategory, Number(month), Number(year));
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

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

export const pieChartBgColors = [
  '#ff8c00',
  '#fff100',
  '#e81123',
  '#ec008c',
  '#68217a',
  '#00188f',
  '#00bcf2',
  '#00b294',
  '#009e49',
  '#bad80a',
];

export const getCurrencySign = currency => {
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
      return rate.buy;
    }
  });
