import React, { useEffect, useState, useMemo } from 'react';
import { Chart, HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getData } from './chartServices';
import {
  backgroundColor,
  getCurrency,
  getRate,
  calculateHeight,
} from './helpers';
import './roundedBars';
import styles from './BarChart.module.css';

Chart.defaults.global.legend.display = false;

const getOptions = (currency, exchangeRate) => {
  return {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            mirror: true,
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    tooltips: {
      displayColors: false,
      titleFontSize: 12,
      bodyFontSize: 10,
      callbacks: {
        label: (tooltipItem, data) => {
          console.log(exchangeRate);
          return `${currency} ${tooltipItem.value / exchangeRate}`;
        },
      },
    },

    plugins: {
      datalabels: {
        labels: {
          title: {
            font: {
              size: '11',
              weight: 'normal',
            },
            color: '#333',

            align: 'top',
            anchor: 'start',

            formatter: function (value, context) {
              return `${context.chart.config.data.labels[context.dataIndex]}`;
            },
            padding: {
              bottom: 14,
            },
          },

          value: {
            color: '#333',
            align: 'end',
            anchor: 'end',
            font: {
              size: '11',
              weight: 'normal',
            },

            formatter: function (value, context) {
              return `${currency} ${value}`;
            },
          },
        },
      },
    },
    layout: {
      padding: {
        left: 42,
        right: 42,
      },
    },
  };
};

const HorizontalChart = ({ currentCategory }) => {
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

  const chart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    const exchangeRate =
      currentCurrency !== 'UAH' && Number(exchangeInfo[0].buy);

    const values = data && Object.values(data);

    const convertedValues = values.map(value => {
      if (currentCurrency === 'UAH') return value;

      return Math.round(value / exchangeRate);
    });

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

  const height = chartData.labels && calculateHeight(chartData);

  return chartData.labels && height ? (
    <div className={`${styles.horizontalChartContainer} container`}>
      <HorizontalBar
        data={chartData}
        options={getOptions(currencySign)}
        height={height}
      />
    </div>
  ) : (
    <></>
  );
};

export default HorizontalChart;
