import { configureStore } from "@reduxjs/toolkit";
import userreduser from './user'
import BalReducer from './Bal'

export const store = configureStore({
  reducer: {
    user: userreduser,
    Bal: BalReducer
  },
});






