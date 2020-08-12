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
  'rgba(255, 129, 45, 0.8)',
  'rgba(255, 241, 0, 0.8)',
  'rgba(232, 17, 35, 0.8)',
  'rgba(236, 0, 140, 0.8)',
  'rgba(104, 33, 122, 0.8)',
  'rgba(0, 24, 143, 0.8)',
  'rgba(0, 188, 242, 0.8)',
  'rgba(0, 178, 148, 0.8)',
  'rgba(0, 158, 73, 0.8)',
  'rgba(186, 216, 10, 0.8)',
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
