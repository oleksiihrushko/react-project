
const isAuthenticated = state => state.auth.token ? true : false;
const getUserName = state => state.auth.name;
const getError = state => state.auth.error;

export default { isAuthenticated, getUserName, getError };

