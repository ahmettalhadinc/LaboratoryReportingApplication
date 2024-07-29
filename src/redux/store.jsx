import { configureStore } from '@reduxjs/toolkit'
import myReducer from './mySlice'
import loginReducer from './loginSlice'
export const store = configureStore({
  reducer: {

    lab: myReducer,
    loginSlice:loginReducer
  },
})