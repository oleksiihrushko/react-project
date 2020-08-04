import api from "../../services/api";
import authSlice from "../auth/authSlice";
import loaderSlice from "../loader/loaderSlice";

export const register = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .register(credentials)
    .then(({ data }) => {
      api.token.set(data.user.token);
      dispatch(authSlice.actions.registerSuccess(data.user));
      dispatch(authSlice.actions.clearError());
    })
    .catch((error) => dispatch(authSlice.actions.registerError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const login = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .login(credentials)
    .then(({ data }) => {
      api.token.set(data.user.token);
      dispatch(authSlice.actions.loginSuccess(data.user));
      dispatch(authSlice.actions.clearError());
    })
    .catch((error) => dispatch(authSlice.actions.loginError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const logOut = () => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authSlice.actions.logoutSuccess());
      dispatch(authSlice.actions.clearError());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};
