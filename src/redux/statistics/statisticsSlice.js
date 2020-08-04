import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  month: '',
  error: '',
};

export default createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    registerSuccess: (state, { payload }) => ({
      ...state,
      name: payload.userData.name,
      token: payload.token,
    }),

    setSelectedMonthSuccess: (state, {payload}) => ({
      ...state,
      month: payload,
    }),

    setSelectedMonthError: (state, {payload}) => ({
      ...state,
      error: payload.error,
    })
  },
});
