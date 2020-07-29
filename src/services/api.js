import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance.goit.co.ua/api/v1';

const login = (credentials) => axios.post('/auth/login', credentials);

const register = (credentials) => axios.post('/auth/register', credentials);

const getAllContacts = () => axios.get('/contacts');

const addContact = (contact) => axios.post('/contacts', contact);

const deleteContact = (id) => axios.delete(`/contacts/${id}`);

const getCurrentUser = () => axios.get('/users/current');

const logout = () => axios.post('/users/logout');

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default {
  addContact,
  deleteContact,
  getAllContacts,
  token,
  register,
  login,
  logout,
  getCurrentUser,
};
