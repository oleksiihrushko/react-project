const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;
// const getUserBallance = (state) => state.operations.ballance;

export { isAuthenticated, getUserName };
const isAuthenticated = state => state.auth.token ? true : false;
const getUserName = state => state.auth.name;
const getError = state => state.auth.error;

export default { isAuthenticated, getUserName, getError };
