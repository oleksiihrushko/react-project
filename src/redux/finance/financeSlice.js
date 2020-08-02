import { createSlice } from '@reduxjs/toolkit';
import financeSelectors from './financeSelectors';

const initialState = {
  ballance: '',
  income: [
    {
      date: '2019-12-01T16:37:41.000Z',
      amount: 500,
      incomeId: '5de3ec95ae03df0b29a4029f',
    },
    {
      date: '2019-10-01T16:37:41.000Z',
      amount: 400,
      incomeId: '5de3ec95ae03df0b29a4029f',
    },
    {
      date: '2019-11-01T16:37:41.000Z',
      amount: 300,
      incomeId: '5de3ec95ae03df0b29a4029f',
    },
  ],
  costs: [
    {
      product: {
        category: {
          name: 'Продукти',
          categoryId: '5ddaefec2a022d8ddf05cddb',
        },
        productId: '5ddaf08f248237915ad7dfbc',
        name: 'Банани',
      },
      costsId: '5de3f3f3ed0e6a41dc21576f',
      amount: 434,
      date: '2019-11-01T19:10:40.086Z',
    },
    {
      product: {
        category: {
          name: 'Продукти',
          categoryId: '5ddaefec2a022d8ddf05cddb',
        },
        productId: '5ddaf08f248237915ad7dfbc',
        name: 'Банани',
      },
      costsId: '5de3f3f3ed0e6a41dc21576f',
      amount: 434,
      date: '2019-10-01T19:10:40.086Z',
    },
    {
      product: {
        category: {
          name: 'Продукти',
          categoryId: '5ddaefec2a022d8ddf05cddb',
        },
        productId: '5ddaf08f248237915ad7dfbc',
        name: 'Банани',
      },
      costsId: '5de3f3f3ed0e6a41dc21576f',
      amount: 434,
      date: '2019-12-01T19:10:40.086Z',
    },
  ],
  categories: [],
  products: [],
  error: '',
};

export default createSlice({
  name: 'operations',
  initialState,
  reducers: {
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
      balance: payload.balance,
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
      income: [...state.income, payload.income],
    }),

    addIncomeError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteIncomeSuccess: (state, { payload }) => ({
      ...state,
      income: financeSelectors.deleteIncome(state, payload.id),
    }),

    deleteIncomeError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addCostsSuccess: (state, { payload }) => ({
      ...state,
      costs: [...state.costs, payload.createdCosts],
    }),

    addCostsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteCostsSuccess: (state, { payload }) => ({
      ...state,
      costs: financeSelectors.deleteCosts(state, payload.id),
    }),

    getCategoriesSuccess: (state, { payload }) => ({
      ...state,
      categories: payload.categories,
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
      products: payload.products,
    }),

    getProductsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    addProductSuccess: (state, { payload }) => ({
      ...state,
      products: payload.products,
    }),

    addProductError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    deleteProductSuccess: (state, { payload }) => ({
      ...state,
      products: financeSelectors.deleteProducts(state, payload.id),
    }),

    deleteProductError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),
  },
});
