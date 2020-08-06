import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getData } from './chartServices';
import { backgroundColor, getCurrency, getRate } from './helpers';
import './roundedBars';
import styles from './BarChart.module.css';

Chart.defaults.global.legend.display = false;

const getOptions = currency => {
  return {
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            drawBorder: false,
            color: 'rgb(241, 244, 251)',
          },
        },
      ],
    },
    tooltips: {
      displayColors: false,
      titleFontSize: 12,
      bodyFontSize: 11,
      xPadding: 10,
      yPadding: 10,
      callbacks: {
        label: (tooltipItem, data) => {
          return `${currency}  ${tooltipItem.value}`;
        },
      },
    },
    plugins: {
      datalabels: {
        color: '#333',
        align: 'top',
        anchor: 'end',
        formatter: data => {
          return `${currency} ${data}`;
        },
        font: {
          weight: 'normal',
          size: 11,
        },
      },
    },
    layout: {
      padding: {
        top: 30,
      },
    },
  };
};

const BarChart = ({ currentCategory }) => {
  const [chartData, setChartData] = useState({});

  const categories = useSelector(state => state.operations.categories);

  const categoriesNames = useMemo(
    () => categories.map(category => category.name),
    [categories],
  );

  const date = useSelector(state => state.statistics.month);
  const month = date && Array.from(date).splice(3, 2).join('') - 1;
  const year = date && Array.from(date).splice(6, 4).join('');

  const products = useSelector(state => state.operations.costs);

  const currentCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );

  const currencySign = getCurrency(currentCurrency);

  const exchangeRates = useSelector(
    state => state.exchangeRatesRoot.exchangeRates,
  );
  const exchangeCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );

  const exchangeInfo = useMemo(() => getRate(exchangeRates, exchangeCurrency), [
    exchangeRates,
    exchangeCurrency,
  ]);

  const valuesRef = useRef();

  const chart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    const exchangeRate =
      currentCurrency !== 'UAH' && exchangeInfo && Number(exchangeInfo[0].buy);

    const values = data && Object.values(data);

    const convertedValues = data
      ? values.map(value => {
          if (currentCurrency === 'UAH') return value;

          return Math.round(value / exchangeRate);
        })
      : [];

    valuesRef.current = convertedValues;

    setChartData({
      labels: data && Object.keys(data),
      datasets: [
        {
          data: convertedValues,
          backgroundColor: backgroundColor,
          barThickness: 18,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  useEffect(() => {
    chart();
  }, [categoriesNames, date, currentCategory, exchangeInfo]);

  return valuesRef.current?.length > 0 ? (
    <div className={`${styles.chartContainer} container`}>
      <Bar data={chartData} options={getOptions(currencySign)} />
    </div>
  ) : null;
};

export default BarChart;
