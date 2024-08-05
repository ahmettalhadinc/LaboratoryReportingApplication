import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  users: [
    {
      email: "admin@gmail.com",
      password: "admin",
      name: "admin",
      role: "Yonetici"
    },
   
  ],
  currentUser: null,
  isAdmin: true,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.users.push({
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        role: action.payload.role || 'Standart Kullanici'
      });
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);

      if (user) {
        state.isAuth = true;
        state.currentUser = user;

        if (user.role === 'Yonetici') {
          state.isAdmin = true;
        } else {
          state.isAdmin = false;
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isAuth', 'true');
      } else {
        alert('Email ya da şifre yanlış');
      }
    },
    logOutUser: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      state.isAdmin = false;

      localStorage.removeItem('currentUser');
      localStorage.removeItem('isAuth');
    },
    setAuthFromStorage: (state) => {
      const storedUser = localStorage.getItem('currentUser');
      const storedAuth = localStorage.getItem('isAuth');

      if (storedUser && storedAuth === 'true') {
        state.isAuth = true;
        state.currentUser = JSON.parse(storedUser);
        state.isAdmin = state.currentUser.role === 'Yonetici';
      }
    },
  },
});

export const { signUpUser, loginUser, logOutUser, setAuthFromStorage } = loginSlice.actions;

export default loginSlice.reducer;
