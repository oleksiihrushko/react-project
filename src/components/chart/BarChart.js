import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Bar, HorizontalBar } from 'react-chartjs-2';
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
} from './helpers';
import './roundedBars';
import styles from './Chart.module.css';

const BarChart = ({ currentCategory }) => {
  const [barChartData, setBarChartData] = useState({});

  const categories = useSelector(state => state.operations.categories);

  const categoriesNames = useMemo(
    () => categories.map(category => category.name),
    [categories],
  );

  // DATE CHECK

  const date = useSelector(state => state.statistics.month);
  const month = date && Array.from(date).splice(3, 2).join('') - 1;
  const year = date && Array.from(date).splice(6, 4).join('');

  const products = useSelector(state => state.operations.costs);

  // GET CURRENCY RATE AND SIGN

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

  const exchangeRate =
    currentCurrency !== 'UAH' && exchangeInfo && Number(exchangeInfo[0].buy);

  const valuesRef = useRef();

  const drawBarChart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    const values = data && Object.values(data);

    const convertedValues = data
      ? values.map(value => {
          if (currentCurrency === 'UAH') return value;

          return Math.round(value / exchangeRate);
        })
      : [];

    valuesRef.current = convertedValues;

    // SET BAR CHART DATA

    setBarChartData({
      labels: data && Object.keys(data),
      datasets: [
        {
          data: convertedValues,
          backgroundColor: backgroundColor,
          barThickness: 22,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  const drawHorChart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

    // SET HORIZONTAL CHART DATA

    let horChartData = [];

    const dataArrays = data && Object.entries(data);

    for (let i = 0; i < dataArrays.length; i += 1) {
      const convertAmount = () => {
        if (currentCurrency === 'UAH') return dataArrays[i][1];

        return Math.round(dataArrays[i][1] / exchangeRate);
      };

      const convertedValue = convertAmount();

      horChartData.push({
        labels: [dataArrays[i][0]],
        datasets: [
          {
            data: [convertedValue],
            backgroundColor: () => {
              for (let j = 0; j < backgroundColor.length; j += 1)
                return backgroundColor[i];
            },
            barThickness: 18,
          },
        ],
        plugins: [ChartDataLabels],
      });
    }
    return horChartData;
  };

  const horChartData = drawHorChart();

  useEffect(() => {
    drawBarChart();
    drawHorChart();
  }, [categoriesNames, date, currentCategory, exchangeInfo]);

  const width = useWindowWidth();

  return width > 767 ? (
    <VerticalBarChart
      valuesRef={valuesRef}
      barChartData={barChartData}
      currencySign={currencySign}
    />
  ) : (
    <HorizontalBarChart
      valuesRef={valuesRef}
      horChartData={horChartData}
      currencySign={currencySign}
    />
  );
};

export default BarChart;

const VerticalBarChart = ({ valuesRef, barChartData, currencySign }) => {
  return valuesRef.current?.length > 0 ? (
    <div className={`${styles.chartContainer} container`}>
      <Bar data={barChartData} options={getBarChartOptions(currencySign)} />
    </div>
  ) : null;
};

const HorizontalBarChart = ({ horChartData, currencySign }) => {
  let max = 0;

  for (let i = 0; i < horChartData.length; i += 1) {
    max = horChartData[0].datasets[0].data;
  }

  return horChartData ? (
    <div className={styles.chartWrapper}>
      {horChartData.map(elem => {
        return (
          <div
            className={`${styles.horizontalChartContainer} container`}
            key={elem.labels}
          >
            <p className={styles.horLabel}>{elem.labels}</p>
            <HorizontalBar
              data={elem}
              options={getHorizontalBarChartOptions(currencySign, Number(max))}
              height={110}
            />
          </div>
        );
      })}
    </div>
  ) : null;
};
