import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  month: 'August',
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
  },
});
