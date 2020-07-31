import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  name: "",
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
    loginSuccess: (state, { payload }) => ({
      ...state,
      name: payload.userData.name,
      token: payload.token,
    }),
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    logoutSuccess: (state) => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
