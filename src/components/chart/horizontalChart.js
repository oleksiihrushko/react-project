import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getCategoryData } from "./chartServices";
import "./roundedBars";
import styles from "./BarChart.module.css";

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
  cornerRadius: 8,
  responsive: true,
  maintainAspectRation: true,
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          //   display: false,
          //   beginAtZero: true,
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
        return `${tooltipItem.value} грн.`;
      },
    },
  },
  plugins: {
    datalabels: {
      color: "#333",
      align: "top",
      anchor: "end",
      formatter: (data) => {
        return `${data} грн`;
      },
    },
  },
};

const HorizontalChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const data = getCategoryData("Продукты", 6, 2020);

    setChartData({
      type: "horizontalBar",
      data: {
        labels: data && Object.values(data),
        datasets: [
          {
            label: "Расходы",
            data: data && Object.keys(data),
            backgroundColor: backgroundColor,
            hoverBackgroundColor: "rgba(255, 179, 45, 0.8)",
            barThickness: 38,
          },
        ],
        plugins: [ChartDataLabels],
      },
      options: options,
    });
    // setChartData({
    //   labels: data && Object.values(data),
    //   datasets: [
    //     {
    //       label: "Расходы",
    //       data: data && Object.keys(data),
    //       backgroundColor: backgroundColor,
    //       hoverBackgroundColor: "rgba(255, 179, 45, 0.8)",
    //       barThickness: 38,
    //       type: "horizontalBar",
    //     },
    //   ],
    //   plugins: [ChartDataLabels],
    // });
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

export default HorizontalChart;
