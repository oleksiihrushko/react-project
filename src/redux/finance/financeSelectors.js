const deleteIncome = (state, id) =>
  state.income.filter((item) => item.incomeId !== id);

const deleteCosts = (state, id) =>
  state.costs.filter((item) => item.costsId !== id);

const deleteProducts = (state, id) =>
  state.products.filter((item) => item._id !== id);

const getBalance = state => state.operations.balance

export const categoriesSelector = state => state.operations.categories

export default {
  deleteIncome,
  deleteCosts,
  deleteProducts,
  getBalance,
};
