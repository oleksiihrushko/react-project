const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;
// const getUserBallance = (state) => state.operations.ballance;

export { isAuthenticated, getUserName };
