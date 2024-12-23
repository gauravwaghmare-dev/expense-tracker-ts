import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    expneseDetails:{}
};

const expenseSlice =  createSlice({
    name : "expenceSlice",
    initialState,
    reducers:{
        AddIncome:(state,action)=>{
            console.log(state);
            console.log(action);
            return {...state.expneseDetails,expneseDetails:action.payload}
        }

    }

});

export const {AddIncome} = expenseSlice.actions;

export default expenseSlice.reducer;