export const getBarChartOptions = currency => {
  return {
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
          size: 10,
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

export const getHorizontalBarChartOptions = (currency, max) => {
  return {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            min: 0,
            max: max,
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
          value: {
            color: '#333',
            align: 'end',
            anchor: 'end',
            font: {
              size: '10',
              weight: 'normal',
            },
            padding: {
              bottom: 10,
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
        right: 46,
      },
    },
  };
};

export const pieChartOptions = {
  plugins: {
    datalabels: {
      color: '#333',
      align: 'end',
      anchor: 'end',
      formatter: data => {
        return `${data}%`;
      },
      font: {
        weight: 'normal',
        size: 10,
      },
      display: 'auto',
    },
  },
  layout: {
    padding: {
      bottom: 30,
    },
  },
  legend: {
    labels: {
      fontSize: 12,
      padding: 10,
      usePointStyle: true,
    },
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        return `${data.labels[tooltipItem.index]} ${
          data.datasets[0].data[tooltipItem.index]
        }%`;
      },
    },
  },
};
