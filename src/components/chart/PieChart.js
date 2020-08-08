import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartDefault, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getData } from './chartServices';
import { useWindowWidth } from './helpers';
import { pieChartOptions } from './chartOptions';
import styles from './Chart.module.css';

ChartDefault.Legend.prototype.afterFit = function () {
  this.height = this.height + 40;
};

const PieChart = ({ currentCategory }) => {
  const [chartData, setChartData] = useState({});

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

  const drawPieChart = () => {
    const data = getData(
      products,
      currentCategory,
      Number(month),
      Number(year),
    );

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
          backgroundColor: [
            '#ff8c00',
            '#fff100',
            '#e81123',
            '#ec008c',
            '#68217a',
            '#00188f',
            '#00bcf2',
            '#00b294',
            '#009e49',
            '#bad80a',
          ],
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  const windowWidth = useWindowWidth();

  useEffect(() => {
    drawPieChart();
  }, [categoriesNames, date, currentCategory, windowWidth]);

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
