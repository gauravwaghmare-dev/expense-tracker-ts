import { createSlice } from "@reduxjs/toolkit";

export const initialState:any = {
  incomeDetails: [],
};

const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState,
  reducers: {
    AddIncome: (state, action) => {
      state.incomeDetails.push(action.payload)
      
    },
  },
});

export const { AddIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
