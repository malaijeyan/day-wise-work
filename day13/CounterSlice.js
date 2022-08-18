import {createSlice} from "@reduxjs/toolkit";

const initialState = {Count:0}

const CounterSlice = createSlice(
    {
    name: "Count",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.Count=state.Count+1
            // console.log(state.Count);
        },
        decrement:(state,action)=>{
            if (state.Count>0) {
            state.Count=state.Count-1
            // console.log(state.Count);
            }
        }
    }
    }

)
export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;