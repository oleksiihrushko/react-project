import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: false,
};

export default createSlice({
  name: "showModal",
  initialState,
  reducers: {
    setShowModalTrue: (state) => ({ ...state, isShowModal: true }),
    setShowModalFalse: (state) => ({ ...state, isShowModal: false }),
  },
});