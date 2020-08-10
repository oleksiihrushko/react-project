import axios from 'axios';

// axios.defaults.baseURL = "https://api.monobank.ua";
const token = 'u4vlaRq2xWJw6Toe7hUuOoVK3No4IbSFzi-A4M2PtCf4';
const BASE_URL = 'https://api.monobank.ua';
const clientInfo = '/personal/client-info';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Token': `${token}`,
  },
};
// GET /personal/statement/{account}/{from}/{to}
export const clientData = () =>
  axios
    .get(`${BASE_URL}${clientInfo}`, config)
    // .get(`${BASE_URL}${clientInfo}`, config)
    // .then(console.log)
    .then(data => console.log('data', JSON.parse(data)))
    .catch(error => {
      console.log(error);
    });

const dateFrom = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 5;
// const dateFrom = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30;
console.log('da', dateFrom);

export const getUserTransactions = () =>
  axios
    .get(`/personal/statement/0/${dateFrom}/`, config)
    // .then((response) => console.log("object", response.data))
    .then(response => console.log('object', response.data))
    .catch(error => {
      console.log(error);
    });

export const clientData2 = () => {
  try {
    fetch(`${BASE_URL}${clientInfo}`, config)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTransactions2 = () =>
  axios
    .get(`${BASE_URL}/personal/statement/0/${dateFrom}/`, config)
    // .then((response) => console.log("object", response.data))
    .then(response => console.log('object', response.data))
    .catch(error => {
      console.log(error);
    });
