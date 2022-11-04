import { initialState } from '../inititalState';
import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name:'filter',
  initialState:initialState.filter,
  reducers: {
    setFilterAction: (state, action) => (state = action.payload),
  }
})


export const { setFilterAction } = filterSlice.actions;
export default filterSlice.reducer;
