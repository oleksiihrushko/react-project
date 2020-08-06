import React, { useEffect, useState } from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getData } from './chartServices';
import { backgroundColor, getCurrency } from './helpers';
import './roundedBars';
import styles from './BarChart.module.css';

Chart.defaults.global.legend.display = false;

const options = {
  // responsive: true,
  // offset: false,
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
    titleFontSize: 16,
    bodyFontSize: 14,
    xPadding: 10,
    yPadding: 10,
    callbacks: {
      label: (tooltipItem, data) => {
        return `₴ ${tooltipItem.value}`;
      },
    },
  },
  plugins: {
    datalabels: {
      color: '#333',
      align: 'top',
      anchor: 'end',
      formatter: data => {
        return `₴ ${data}`;
      },
    },
  },
  layout: {
    padding: {
      top: 30,
    },
  },
};

const BarChart = ({ currentCategory }) => {
  const [chartData, setChartData] = useState({});

  const date = useSelector(state => state.statistics.month);
  const month = date && Array.from(date).splice(3, 2).join('') - 1;
  const year = date && Array.from(date).splice(6, 4).join('');

  const products = useSelector(state => state.operations.costs);

  const currency = useSelector(state =>
    getCurrency(state.exchangeRatesRoot.exchangeCurrency),
  );

  const categories = useSelector(state => state.operations.categories);

  const chart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    setChartData({
      labels: data && Object.keys(data),
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
  }, [categories, date, currentCategory, currency]);

  return (
    <div className={`${styles.chartContainer} container`}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

// import React, { useEffect, useState, useMemo } from 'react';
// import { Chart, HorizontalBar } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import { useSelector } from 'react-redux';
// import { getData } from './chartServices';
// import {
//   backgroundColor,
//   // monthNameToNum,
//   getCurrency,
//   calculateHeight,
// } from './helpers';
// import './roundedBars';
// import styles from './BarChart.module.css';

// Chart.defaults.global.legend.display = false;

// const getOptions = currency => {
//   return {
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             display: false,
//           },
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           ticks: {
//             mirror: true,
//             beginAtZero: true,
//             display: false,
//             // callback: function (value, index, values) {
//             //   return value;
//             // },
//           },
//           gridLines: {
//             display: false,
//             drawBorder: false,
//           },
//         },
//       ],
//     },
//     tooltips: {
//       displayColors: false,
//       titleFontSize: 12,
//       bodyFontSize: 10,
//       callbacks: {
//         label: (tooltipItem, data) => {
//           return `${currency} ${tooltipItem.value}`;
//         },
//       },
//     },

//     plugins: {
//       datalabels: {
//         labels: {
//           title: {
//             font: {
//               size: '11',
//               weight: 'normal',
//             },
//             color: '#333',

//             align: 'top',
//             anchor: 'start',

//             formatter: function (value, context) {
//               return `${context.chart.config.data.labels[context.dataIndex]}`;
//             },
//             padding: {
//               bottom: 14,
//             },
//           },

//           value: {
//             color: '#333',
//             align: 'end',
//             anchor: 'end',
//             font: {
//               size: '11',
//               weight: 'normal',
//             },

//             formatter: function (value, context) {
//               return `${currency} ${value}`;
//             },
//           },
//         },
//       },
//     },
//     layout: {
//       padding: {
//         left: 42,
//         right: 40,
//       },
//     },
//   };
// };

// const HorizontalChart = () => {
//   const [chartData, setChartData] = useState({});

//   const date = useSelector(state => state.statistics.month);
//   const month = date && Array.from(date).splice(3, 2).join('') - 1;
//   const year = date && Array.from(date).splice(6, 4).join('');

//   const product = useSelector(state => state.operations.costs[0]);
//   const category = product && product.product.category.name;

//   const currency = useSelector(state =>
//     getCurrency(state.exchangeRatesRoot.exchangeCurrency),
//   );

//   const categories = useSelector(state => state.operations.categories);

//   const categoriesNames = useMemo(
//     () => categories.map(category => category.name),
//     [categories],
//   );

//   const chart = () => {
//     const data = getData(category, Number(month), Number(year));

//     setChartData({
//       labels: categoriesNames,
//       datasets: [
//         {
//           data: data && Object.values(data),
//           backgroundColor: backgroundColor,
//           barThickness: 18,
//         },
//       ],
//       plugins: [ChartDataLabels],
//     });
//   };

//   useEffect(() => {
//     chart();
//   }, [categoriesNames, date]);

//   const height = chartData.labels && calculateHeight(chartData);

//   return chartData.labels && height ? (
//     <div className={styles.horizontalChartContainer}>
//       <HorizontalBar
//         data={chartData}
//         options={getOptions(currency)}
//         height={height}
//       />
//     </div>
//   ) : (
//       <></>
//     );
// };

// export default HorizontalChart;
