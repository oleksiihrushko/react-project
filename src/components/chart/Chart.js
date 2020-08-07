import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartDefault, Bar, HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getData } from './chartServices';
import {
  getBarChartOptions,
  getHorizontalBarChartOptions,
} from './chartOptions';
import {
  useWindowWidth,
  backgroundColor,
  getCurrencySign,
  getRate,
  calculateHeight,
} from './helpers';
import './roundedBars';
import styles from './Chart.module.css';

ChartDefault.defaults.global.legend.display = false;

const Chart = ({ currentCategory }) => {
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

  const currencySign = getCurrencySign(currentCurrency);

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

  let canvas = document.querySelector('canvas');
  // console.log(canvas);

  const drawChart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    // console.log('data', data);

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

  const height = chartData.labels && calculateHeight(chartData);

  useEffect(() => {
    drawChart();
  }, [categoriesNames, date, currentCategory, exchangeInfo, height, canvas]);

  if (canvas) {
    if (canvas.props) {
      canvas.props.height = height;
    }

    canvas = (
      <canvas
        height={height}
        width="282"
        class="chartjs-render-monitor"
        style={{
          display: 'block',
          height: `${height}px`,
          width: '226px',
        }}
      ></canvas>
    );
    console.log('canvas', canvas.props.height);
  }

  const width = useWindowWidth();

  return width > 767 ? (
    <BarChart
      valuesRef={valuesRef}
      chartData={chartData}
      currencySign={currencySign}
    />
  ) : (
    <HorizontalChart
      valuesRef={valuesRef}
      chartData={chartData}
      currencySign={currencySign}
      height={height}
    />
  );
};

export default Chart;

const BarChart = ({ valuesRef, chartData, currencySign }) => {
  return valuesRef.current?.length > 0 ? (
    <div className={`${styles.chartContainer} container`}>
      <Bar data={chartData} options={getBarChartOptions(currencySign)} />
    </div>
  ) : null;
};

const HorizontalChart = ({ valuesRef, chartData, currencySign, height }) => {
  return chartData.labels && height && valuesRef.current?.length > 0 ? (
    <div
      className={`${styles.horizontalChartContainer} container`}
      // styles={{ position: 'relative', height: calculateHeight(chartData) }}
    >
      <HorizontalBar
        data={chartData}
        options={getHorizontalBarChartOptions(currencySign)}
        height={calculateHeight(chartData)}
      />
    </div>
  ) : null;
};
