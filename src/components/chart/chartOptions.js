export const getBarChartOptions = currency => {
  return {
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
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
      titleFontSize: 12,
      bodyFontSize: 11,
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
        color: '#333',
        align: 'top',
        anchor: 'end',
        formatter: data => {
          return `${currency} ${data}`;
        },
        font: {
          weight: 'normal',
          size: 11,
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

export const getHorizontalBarChartOptions = currency => {
  return {
    responsive: true,
    maintainAspectRatio: false,
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
            mirror: true,
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
          return `${currency} ${tooltipItem.value}`;
        },
      },
    },

    plugins: {
      datalabels: {
        labels: {
          title: {
            font: {
              size: '11',
              weight: 'normal',
            },
            color: '#333',

            align: 'top',
            anchor: 'start',

            formatter: function (value, context) {
              return `${context.chart.config.data.labels[context.dataIndex]}`;
            },
            padding: {
              bottom: 14,
            },
          },

          value: {
            color: '#333',
            align: 'end',
            anchor: 'end',
            font: {
              size: '11',
              weight: 'normal',
            },

            formatter: function (value, context) {
              return `${currency} ${value}`;
            },
          },
        },
      },
    },
    layout: {
      padding: {
        left: 42,
        right: 42,
      },
    },
  };
};
