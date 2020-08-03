const storeTest = {
  isLoading: false,
  auth: {
    token: '',
    googleLogin: false,
    name: {
      fullName: '',
      firstName: '',
      lastName: '',
    },

    photo: '',
    error: '',
  },
  operations: {
    balance: '',
    income: [], //[{}, {}]
    costs: [], //[{}, {}]
    categories: [], //['', '', '']
    products: [],
  },
  statistics: {
    month: '',
  },
};
