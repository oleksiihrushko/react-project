const deleteIncome = (state, id) =>
  state.income.filter(item => item.incomeId !== id);

const deleteProducts = (state, id) =>
  state.products.filter(item => item._id !== id);

const getBalance = state => state.operations.balance;

export default {
  deleteIncome,
  deleteProducts,
  getBalance,
};
