import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance.goit.co.ua/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const login = credentials => axios.post('/auth/login', credentials);

const logout = () => axios.post('/auth/logout');

const register = credentials => axios.post('/auth/register', credentials);

const getTransactions = () => axios.get('/transactions');

const getBalance = () => axios.get('/balance');

const addBalance = balance => axios.post('/balance', balance);

const addIncome = income => axios.post('/income', income);

const deleteIncome = id => axios.delete(`/income/${id}`);

const addCosts = costs => {
  console.log(111);
  axios.post('/costs', costs);
};

const getCosts = date => axios.get('/costs', date);

const deleteCosts = (idDelete, id) => axios.delete(`/costs/${idDelete}/${id}`);

const getCategories = () => axios.get('/categories');

const addCategory = category => axios.post('/categories', category);

const deleteCategory = id => axios.delete(`/categories/${id}`);

const patchCategory = (id, category) =>
  axios.patch(`/categories/${id}`, category);

const getProducts = () => axios.get('/products');

const addProduct = product => axios.post('/products', product);

const deleteProduct = id => axios.delete(`/products/${id}`);

export default {
  token,
  login,
  logout,
  register,
  getTransactions,
  getBalance,
  addBalance,
  addIncome,
  deleteIncome,
  addCosts,
  getCosts,
  deleteCosts,
  getCategories,
  addCategory,
  deleteCategory,
  patchCategory,
  getProducts,
  addProduct,
  deleteProduct,
};
