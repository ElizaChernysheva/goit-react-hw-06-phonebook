import { combineReducers } from 'redux';
import filterSlice from './filter/filterSlice';
import contactsSlice from './contacts/contactsSlice';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});
