const isAuthenticated = (state) => Boolean(state.auth.token);
const token = (state) => state.auth.token;
const getPhoto = (state) => state.auth.photo;
const getUserName = (state) => state.auth.name;
const getError = (state) => state.auth.error;

export default { isAuthenticated, getUserName, getError, token, getPhoto };
