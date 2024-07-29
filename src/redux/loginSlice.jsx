import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  users: [],
  currentUser:null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.users.push({
        email: action.payload.email,
        password: action.payload.password,
        name:action.payload.name
      });
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      
      if (user) {
        state.isAuth = true;
        state.currentUser = user;
      } else {
        alert('Email ya da sifre yanlis');
      }
    },
    logOutUser:(state)=>{
      state.isAuth=false
      state.currentUser = null
    }
  },
  
})

export const { signUpUser ,loginUser,logOutUser} = loginSlice.actions

export default loginSlice.reducer
