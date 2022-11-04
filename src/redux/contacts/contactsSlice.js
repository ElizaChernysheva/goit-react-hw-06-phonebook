import { initialState } from '../inititalState';

import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name:'contacts',
  initialState:initialState.contacts,
  reducers: {
    addContactAction: (state, action) => {
      return [action.payload,...state]
    },
    removeContactAction:(state,action) =>{
      return state.filter(contact => contact.id !== action.payload)
    }
  }
})


export const { addContactAction,removeContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
