import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money:'',
};

export const bal = createSlice({
  name: "bal",
  initialState,
  reducers: {
    cash:(state,action)=>{
        state.money = action.payload;
    },
   
    
  },
});


export  const {cash}=bal.actions

export default bal.reducer



