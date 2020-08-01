import React, { useEffect, useState } from "react";
import { Chart, HorizontalBar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getCategoryData } from "./chartServices";
import "./roundedBars";
import styles from "./BarChart.module.css";

Chart.defaults.global.legend.display = false;

const backgroundColor = [
  "rgba(255, 129, 45, 0.8)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.8)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.8)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.8)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.3)",
  "rgba(255, 129, 45, 0.8)",
];

const options = {
  responsive: true,
  maintainAspectRation: true,
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
  plugins: {
    datalabels: {
      labels: {
        title: {
          color: "#333",

          align: "top",
          anchor: "start",
          // anchor: "start",
          // align: "end",
          // clamp: true,

          formatter: function (value, context) {
            return `${context.chart.config.data.labels[context.dataIndex]}`;
          },
          padding: {
            bottom: 20,
            left: 10,
          },
        },

        value: {
          color: "#333",
          align: "top",
          anchor: "end",

          formatter: function (value, context) {
            return ` ${value} грн`;
          },
          padding: {
            bottom: 20,
            right: 20,
          },
          display: "auto",
        },
      },
    },
  },

  layout: {
    padding: {
      right: 50,
      top: 20,
      left: 32,
    },
  },
};

const HorizontalChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const data = getCategoryData("Продукты", 6, 2020);

    setChartData({
      labels: data && Object.keys(data),
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
  }, []);

  return (
    <div className={styles.chartContainer}>
      <HorizontalBar data={chartData} options={options} />
    </div>
  );
};

export default HorizontalChart;
