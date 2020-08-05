import React, { useEffect, useState, useMemo } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";
import { getData } from "./chartServices";
import { monthNameToNum, getCurrency, backgroundColor } from "./helpers";
import "./roundedBars";
import styles from "./BarChart.module.css";

Chart.defaults.global.legend.display = false;

const getOptions = (currency) => {
  return {
    legend: {
      position: "bottom",
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
            color: "rgb(241, 244, 251)",
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
          return `${currency}  ${tooltipItem.value}`;
        },
      },
    },
    plugins: {
      datalabels: {
        color: "#333",
        align: "top",
        anchor: "end",
        formatter: (data) => {
          return `${currency} ${data}`;
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

  const month = useSelector((state) => monthNameToNum(state.statistics.month));

  const currency = useSelector((state) =>
    getCurrency(state.exchangeRatesRoot.exchangeCurrency)
  );

  const categories = useSelector((state) => state.operations.categories);

  const categoriesNames = useMemo(
    () => categories.map((category) => category.name),
    [categories]
  );

  const chart = () => {
    const data = getData("all", month, 2020);

    setChartData({
      labels: categoriesNames,
      datasets: [
        {
          data: data && Object.values(data),
          backgroundColor: backgroundColor,
          hoverBackgroundColor: "rgba(255, 179, 45, 0.8)",
          barThickness: 20,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  useEffect(() => {
    chart();
  }, [categoriesNames]);

  return (
    <div className={styles.chartContainer}>
      <Bar data={chartData} options={getOptions(currency)} />
    </div>
  );
};

export default BarChart;
