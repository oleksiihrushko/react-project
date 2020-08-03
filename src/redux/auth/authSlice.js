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

// {status: "success", user: {…}, balance: 0}
// balance: 0
// status: "success"
// user:
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjJjNWIyZDMxNmRiNzRiODliNTQxNyIsImlhdCI6MTU5NjExNDM1NX0.MTShWTP62bCaWSHv_QZh3hznMYORR8njAhaNWl_FhAU"
// userData:
// createdAt: "2020-07-30T13:05:54.983Z"
// email: "pzppzpz56456@gmail.com"
// name: {fullName: "ZZZZMVSCs VnnxxcbvSDS", firstName: "ZZZZMVSCs", lastName: "VnnxxcbvSDS"}
// userNew: true
