import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  incomeDetails: {},
};

const incomeSlice = createSlice({
  name: "expenceSlice",
  initialState,
  reducers: {
    AddIncome: (state, action) => {
      console.log(state);
      console.log(action);
      return { ...state.incomeDetails, incomeDetails: action.payload };
    },
  },
});

export const { AddIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
