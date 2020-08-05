import React, { useEffect, useState, useMemo } from 'react';
import { Chart, HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getData } from './chartServices';
import {
  backgroundColor,
  // monthNameToNum,
  getCurrency,
  calculateHeight,
} from './helpers';
import './roundedBars';
import styles from './BarChart.module.css';

Chart.defaults.global.legend.display = false;

const getOptions = currency => {
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
            // callback: function (value, index, values) {
            //   return value;
            // },
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
          return `${currency} ${tooltipItem.value}`;
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
        right: 40,
      },
    },
  };
};

const HorizontalChart = () => {
  const [chartData, setChartData] = useState({});

  const date = useSelector(state => state.statistics.month);
  const month = date && Array.from(date).splice(3, 2).join('') - 1;
  const year = date && Array.from(date).splice(6, 4).join('');

  const currency = useSelector(state =>
    getCurrency(state.exchangeRatesRoot.exchangeCurrency),
  );

  const categories = useSelector(state => state.operations.categories);

  const categoriesNames = useMemo(
    () => categories.map(category => category.name),
    [categories],
  );

  const chart = () => {
    const data = getData('all', Number(month), Number(year));

    setChartData({
      labels: categoriesNames,
      datasets: [
        {
          data: data && Object.values(data),
          backgroundColor: backgroundColor,
          barThickness: 18,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  useEffect(() => {
    chart();
  }, [categoriesNames, date]);

  const height = chartData.labels && calculateHeight(chartData);

  return chartData.labels && height ? (
    <div className={styles.horizontalChartContainer}>
      <HorizontalBar
        data={chartData}
        options={getOptions(currency)}
        height={height}
      />
    </div>
  ) : (
    <></>
  );
};

export default HorizontalChart;
