import { useState, useEffect } from 'react';

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

export const calculateHeight = chartData => {
  if (!chartData.labels) return;

  let length = chartData.labels ? chartData.labels.length : 0;

  return length * 60;
};
