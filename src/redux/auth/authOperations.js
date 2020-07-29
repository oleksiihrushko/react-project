import api from '../../services/api';
import authSlice from './authSlice';
import loaderSlice from '../loader/loaderSlice';

// const registerResponse = {
//   status: 'success',
//   user: {
//     userData: {
//       name: {
//         fullName: 'string',
//         firstName: 'string',
//         lastName: 'string',
//       },
//       email: 'user@example.com',
//       photo: 'string',
//       userNew: true,
//     },
//     token:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDNhMTM4NmIxZTg1NTdjZjIzNjY3ODEiLCJpYXQiOjE1NjQwODcxNzV9.jSdzHuBSf4yKS6t7zwt0AoQIchHlz73JDOjfHVdbTBk',
//   },
// };

export const register = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .register(credentials)
    .then((data) => {
      api.token.set(data.user.token);
      dispatch(authSlice.actions.registerSuccess(data.user.userData));
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.registerError(error)))
    .finally(dispatch(loaderSlice.actions.setLoadingFalse()));
};

export const login = (credentials) => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .login(credentials)
    .then((data) => {
      api.token.set(data.data.token);
      dispatch(authSlice.actions.loginSuccess(data.data));
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.registerError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};

export const logOut = () => (dispatch) => {
  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authSlice.actions.logoutSuccess());
      dispatch(authSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  api.token.set(persistedToken);

  dispatch(themeSlice.actions.setLoadingTrue());
  api
    .getCurrentUser()
    .then(({ data }) => dispatch(authSlice.actions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(authSlice.actions.getCurrentUserError(error)))
    .finally(dispatch(themeSlice.actions.setLoadingFalse()));
};
