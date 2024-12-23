import { configureStore } from "@reduxjs/toolkit";
import expenceSliceReducer from "./features/expenseSlice";
export  const store  = configureStore({
    reducer:{
        expence: expenceSliceReducer,
    }
})

