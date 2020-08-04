import React, { useEffect, useState } from "react";
import { Chart, HorizontalBar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { connect } from "react-redux";
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
  // maintainAspectRation: true,
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
  tooltips: {
    displayColors: false,
    titleFontSize: 12,
    bodyFontSize: 10,
    callbacks: {
      label: (tooltipItem, data) => {
        return `₴ ${tooltipItem.value}`;
      },
    },
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
          align: "end",
          anchor: "end",

          formatter: function (value, context) {
            return `₴ ${value}`;
          },
          padding: {
            bottom: 20,
            right: 20,
          },
          // display: "auto",
        },
      },
    },
  },

  layout: {
    padding: {
      right: 46,
      top: 20,
      left: 42,
    },
  },
};

const HorizontalChart = () => {
  const [chartData, setChartData] = useState({});

  let category = "all";

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
          data: data && Object.values(data),
          backgroundColor: backgroundColor,
          barThickness: 18,
          // minBarLength: 90,
        },
      ],
      plugins: [ChartDataLabels],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  function calculateHeight() {
    if (!chartData.labels) return;

    let length = chartData.labels ? chartData.labels.length : 0;

    return length * 80;
  }

  const height = chartData.labels && calculateHeight();

  return chartData.labels && height ? (
    <div className={styles.horizontalChartContainer}>
      <HorizontalBar data={chartData} options={options} height={height} />
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(HorizontalChart);
