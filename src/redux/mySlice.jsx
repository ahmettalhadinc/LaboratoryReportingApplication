import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  
}

export const mySlice = createSlice({
  name: 'random123',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    deleteData: (state, action) => {
      state.data = state.data.filter(item => item.dosyaNumarasi !== action.payload);
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    loadDataFromLocalStorage: (state) => {
      const localData = localStorage.getItem('data');
      if (localData) {
        state.data = JSON.parse(localData);
      }
    },
    updateReport(state, action) {
      const index = state.data.findIndex(report => report.dosyaNumarasi === action.payload.dosyaNumarasi);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
      localStorage.setItem('data', JSON.stringify(state.data));
    }
  },
})

export const { addData ,loadDataFromLocalStorage,deleteData,updateReport} = mySlice.actions

export default mySlice.reducer