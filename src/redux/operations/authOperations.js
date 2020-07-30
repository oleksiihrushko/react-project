import api from '../../services/api';
import authSlice from '../auth/authSlice';
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

//{
//   "status": "error",
//   "error": "Server selection timed out after 30000 ms"
// }

export const register = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  // console.log(credentials)
  api
    .register(credentials)
    .then(({data}) => {
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
