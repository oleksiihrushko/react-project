import api from '../../services/api';
import financeSlice from './financeSlice';
import loaderSlice from '../loader/loaderSlice';

export const getDataOnInit = () => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  const getTransactionsPromise = () => api.getTransactions();
  const getCategoriesPromise = () => api.getCategories();
  const getProductsPromise = () => api.getProducts();
  const getBalancePromise = () => api.getBalance();
  await Promise.all([
    getTransactionsPromise(),
    getCategoriesPromise(),
    getProductsPromise(),
    getBalancePromise(),
  ])
    .then(data => {
      dispatch(financeSlice.actions.getTransactionsSuccess(data[0].data));
      dispatch(
        financeSlice.actions.getCategoriesSuccess(data[1].data.categories),
      );
      dispatch(financeSlice.actions.getProductsSuccess(data[2].data.products));
      dispatch(financeSlice.actions.getBalanceSuccess(data[3].data.balance));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.getDataOnInitError(error)));
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getTransactions = () => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const { data } = await api.getTransactions();
    dispatch(financeSlice.actions.getTransactionsSuccess(data));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.getTransactionsError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getBalance = () => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getBalance()
    .then(({ amount }) => {
      dispatch(financeSlice.actions.getBalanceSuccess(amount));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.getBalanceError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const addBalance = balance => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const { data } = await api.addBalance(balance);
    dispatch(financeSlice.actions.addBalanceSuccess(data.balance));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.addBalanceError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const addIncome = income => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const addIncomeResponse = await api.addIncome(income);
    dispatch(
      financeSlice.actions.addIncomeSuccess(addIncomeResponse.data.income),
    );
    dispatch(
      financeSlice.actions.addBalanceSuccess(addIncomeResponse.data.balance),
    );
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.addIncomeError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const deleteIncome = id => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const deleteIncomeResponse = await api.deleteIncome(id);
    dispatch(financeSlice.actions.deleteIncomeSuccess(id));
    dispatch(
      financeSlice.actions.addBalanceSuccess(deleteIncomeResponse.data.balance),
    );
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.deleteIncomeError(error));
  }

  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const deleteCosts = (idDelete, id) => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const deleteCostsResponse = await api.deleteCosts(idDelete, id);
    dispatch(financeSlice.actions.deleteCostsSuccess(id));
    dispatch(
      financeSlice.actions.addBalanceSuccess(deleteCostsResponse.data.balance),
    );
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.deleteCostsError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const addCosts = (
  costDescription,
  categoryId,
  date,
  amount,
) => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const productResponse = await api.addProduct({
      name: costDescription,
      category: categoryId,
    });
    const products = await api.getProducts();
    dispatch(financeSlice.actions.addProductSuccess(products.data.products));
    const createdCosts = await api.addCosts({
      date,
      product: {
        productId: productResponse.data.product._id,
        amount,
        date,
      },
    });
    dispatch(
      financeSlice.actions.addCostsSuccess(createdCosts.data.createdCosts),
    );
    dispatch(financeSlice.actions.addBalanceSuccess(createdCosts.data.balance));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.addCostsError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getCosts = date => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getCosts(date)
    .then(({ items }) => {
      dispatch(financeSlice.actions.addCostsSuccess(items));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.addCostsError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const getCategories = () => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const { data } = await api.getCategories();
    dispatch(financeSlice.actions.getCategoriesSuccess(data.categories));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.getCategoriesError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const addCategory = category => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .addCategory(category)
    .then(data => {
      dispatch(financeSlice.actions.addCategorySuccess(data.category));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.addCategoryError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const deleteCategory = id => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .deleteCategory()
    .then(() => {
      dispatch(financeSlice.actions.deleteCategory(id));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.deleteCategoryError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const patchCategory = (id, category) => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    await api.patchCategory(id, category);
    const data = await api.getCategories();
    dispatch(financeSlice.actions.patchCategorySuccess(data));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.patchCategoryError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getProducts = () => async dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const { data } = await api.getProducts();
    dispatch(financeSlice.actions.getProductsSuccess(data.products));
    dispatch(financeSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(financeSlice.actions.getProductsError(error));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const deleteProduct = id => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .deleteProduct()
    .then(() => {
      dispatch(financeSlice.actions.deleteProduct(id));
      dispatch(financeSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(financeSlice.actions.deleteProductError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};
