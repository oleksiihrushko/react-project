import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export default createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoadingTrue: (state) => ({ ...state, isLoading: true }),
    setLoadingFalse: (state) => ({ ...state, isLoading: false }),
  },
});
