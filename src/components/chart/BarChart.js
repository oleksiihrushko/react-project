import React, { useEffect, useState, useMemo } from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getData } from './chartServices';
import { monthNameToNum, getCurrency, backgroundColor } from './helpers';
import './roundedBars';
import styles from './BarChart.module.css';

Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontSize = 11;

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
            // display: false,
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

const BarChart = () => {
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
          hoverBackgroundColor: 'rgba(255, 179, 45, 0.8)',
          barThickness: 20,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  useEffect(() => {
    chart();
  }, [categoriesNames, date]);

  return (
    <div className={styles.chartContainer}>
      <Bar data={chartData} options={getOptions(currency)} />
    </div>
  );
};

export default BarChart;
