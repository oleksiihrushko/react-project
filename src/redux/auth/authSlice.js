import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  googleLogin: false,
  name: {
    fullName: "",
    firstName: "",
    lastName: "",
  },
  photo: "",
  error: "",
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, { payload }) => ({
      ...state,
      name: payload.userData.name,
      token: payload.token,
    }),
    registerError: (state, { payload }) => ({ ...state, error: payload }),
    clearError: (state) => ({ ...state, error: "" }),
    loginSuccess: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        name: payload.userData.name,
        token: payload.token,
        photo: payload.photo
          ? payload.photo
          : payload.userData.name.firstName.slice(0, 1),
        googleLogin: payload.googleLogin,
      };
    },
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    logoutSuccess: (state) => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
    logoutGoogleSuccess: (state) => initialState,
  },
});
