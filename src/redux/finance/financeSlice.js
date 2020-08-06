import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: '',
  income: [],
  costs: [],
  categories: [],
  products: [],
  error: '',
};

export default createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setErrorNull: state => ({ ...state, error: '' }),

    getDataOnInitError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    getTransactionsSuccess: (state, { payload }) => ({
      ...state,
      income: payload.income,
      costs: payload.costs,
    }),

    getTransactionsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    getBalanceSuccess: (state, { payload }) => ({
      ...state,
      balance: payload,
    }),

    getBalanceError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addBalanceSuccess: (state, { payload }) => ({
      ...state,
      balance: payload.balance,
    }),

    addBalanceError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addIncomeSuccess: (state, { payload }) => ({
      ...state,
      income: [...state.income, payload],
    }),

    addIncomeError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteIncomeSuccess: (state, { payload }) => ({
      ...state,
      income: state.income.filter(item => item.incomeId !== payload),
    }),

    deleteIncomeError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addCostsSuccess: (state, { payload }) => ({
      ...state,
      costs: [...state.costs, payload],
    }),

    addCostsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteCostsSuccess: (state, { payload }) => ({
      ...state,
      costs: state.costs.filter(item => item.costsId !== payload),
    }),

    getCategoriesSuccess: (state, { payload }) => ({
      ...state,
      categories: payload,
    }),

    getCategoriesError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addCategorySuccess: (state, { payload }) => ({
      ...state,
      categories: [...state.categories, payload],
    }),

    addCategoryError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    patchCategorySuccess: (state, { payload }) => ({
      ...state,
      categories: payload.categories,
    }),

    patchCategoryError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    getProductsSuccess: (state, { payload }) => ({
      ...state,
      products: payload,
    }),

    getProductsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addProductSuccess: (state, { payload }) => ({
      ...state,
      products: payload,
    }),

    addProductError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteProductSuccess: (state, { payload }) => ({
      ...state,
      products: state.products.filter(item => item._id !== payload),
    }),

    deleteProductError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),
  },
});
