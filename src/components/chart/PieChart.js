import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartDefault, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useWindowWidth, getFilteredData, pieChartBgColors } from './helpers';
import { pieChartOptions } from './chartOptions';
import styles from './Chart.module.css';

ChartDefault.Legend.prototype.afterFit = function () {
  this.height = this.height + 40;
};

const PieChart = ({ currentCategory }) => {
  const [chartData, setChartData] = useState({});

  const date = useSelector(state => state.statistics.month);
  const products = useSelector(state => state.operations.costs);

  const data = getFilteredData(currentCategory, date, products);

  const drawPieChart = () => {
    const values = data && Object.values(data);
    const total = values && values.reduce((acc, value) => (acc += value), 0);

    const percentages =
      total !== 0 &&
      values &&
      values.map(value => ((value / total) * 100).toFixed(1));

    // SET BAR CHART DATA

    setChartData({
      labels: data && Object.keys(data),
      datasets: [
        {
          data: percentages,
          backgroundColor: pieChartBgColors,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  const windowWidth = useWindowWidth();

  useEffect(() => {
    drawPieChart();
  }, [date, currentCategory, windowWidth]);

  const mobile = windowWidth < 768;
  const tablet = windowWidth >= 768 && windowWidth < 1280;
  const desktop = windowWidth >= 1280;

  return chartData && chartData.labels ? (
    <div className={`${styles.pieChartContainer} container`}>
      {mobile && (
        <Pie
          data={chartData}
          options={pieChartOptions}
          width={170}
          height={170}
        />
      )}

      {tablet && (
        <Pie
          data={chartData}
          options={pieChartOptions}
          width={40}
          height={23}
        />
      )}

      {desktop && (
        <Pie
          data={chartData}
          options={pieChartOptions}
          width={50}
          height={20}
        />
      )}
    </div>
  ) : null;
};

export default PieChart;
