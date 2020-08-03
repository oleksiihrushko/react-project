import React, { useEffect, useState } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getData } from "./chartServices";
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
  // responsive: true,
  // offset: false,
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
        return `₴ ${tooltipItem.value}`;
      },
    },
  },
  plugins: {
    datalabels: {
      color: "#333",
      align: "top",
      anchor: "end",
      formatter: (data) => {
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

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const category = "products";

  const chart = () => {
    const data = getData(category, 6, 2020);

    setChartData({
      labels:
        category === "all"
          ? [
              "Продукты",
              "Алкоголь",
              "Развлечения",
              "Здоровье",
              "Транспорт",
              "Все для дома",
              "Техника",
              "Коммуналка, связь",
              "Спорт, хобби",
              "Образование",
              "Прочее",
            ]
          : data && Object.keys(data),
      // labels: data && Object.keys(data),
      datasets: [
        {
          label: "Расходы",
          data: data && Object.values(data),
          backgroundColor: backgroundColor,
          hoverBackgroundColor: "rgba(255, 179, 45, 0.8)",
          barThickness: category === "all" ? 20 : 30,
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
