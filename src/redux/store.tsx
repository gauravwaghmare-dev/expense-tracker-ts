import { configureStore } from "@reduxjs/toolkit";
import incomeSliceReducer from "./features/incomeSlice";
export const store = configureStore({
  reducer: {
    income: incomeSliceReducer,
  },
});
