import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 
    [
     
    ],
    act:false,er:false
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    re:(state,action)=>{
        state.user = action.payload;
    },
    active:(state,action)=>{
state.act = action.payload;

    },
    anactive:(state,action)=>{
state.er = action.payload;

    }
    
  },
});


export  const {re,active,anactive}=user.actions

export default user.reducer



