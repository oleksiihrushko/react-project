import api from '../../services/api';
import financeSlice from '../';
import loaderSlice from '../loader/loaderSlice';

export const getTransactions = () => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getTransactions()
    .then((data) => {
      dispatch(financeSlice.actions.getTransactionsSuccess(data));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) =>
      dispatch(financeSlice.actions.getTransactionsError(error))
    )
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const getBalance = () => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getBalance()
    .then(({ amount }) => {
      dispatch(financeSlice.actions.getBalanceSuccess(amount));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.getBalanceError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const addBalance = (balance) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .addBalance(balance)
    .then(({ amount }) => {
      dispatch(financeSlice.actions.addBalanceSuccess(amount));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.addBalanceError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const addIncome = (income) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .addIncome(income)
    .then(({ income }) => {
      dispatch(financeSlice.actions.addIncomeSuccess(income));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.addIncomeError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const deleteIncome = (id) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .deleteIncome()
    .then(() => {
      dispatch(financeSlice.actions.deleteIncome(id));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.deleteIncomeError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const addCosts = (costs) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .addCosts(costs)
    .then(({ createdCosts }) => {
      dispatch(financeSlice.actions.addCostsSuccess(createdCosts));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.addCostsError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const getCosts = (date) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getCosts(date)
    .then(({ items }) => {
      dispatch(financeSlice.actions.addCostsSuccess(items));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.addCostsError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const deleteCosts = (data) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .deleteCosts(data)
    .then(({ tasks }) => {
      dispatch(financeSlice.actions.deleteCostsSuccess(tasks));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.deleteCostsError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const getCategories = () => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getCategories()
    .then((data) => {
      dispatch(financeSlice.actions.getCategoriesSuccess(data));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.getCategoriesError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const addCategories = (category) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .addCategories(category)
    .then((data) => {
      dispatch(financeSlice.actions.addCategoriesSuccess(data));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.addCategoriesError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const deleteCategory = (id) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .deleteCategory()
    .then(() => {
      dispatch(financeSlice.actions.deleteCategory(id));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.deleteCategoryError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const patchCategory = (id, category) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .patchCategory(id, category)
    .then(() => {
      dispatch(financeSlice.actions.patchCategory(id, category));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(financeSlice.actions.patchCategoryError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};
