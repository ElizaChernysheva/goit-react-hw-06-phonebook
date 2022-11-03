import { configureStore, createStore } from '@reduxjs/toolkit';
import {filterReducer} from './filter/filterReducer';
import {contactsReducer} from './contacts/contactsReducer';

import {reducer} from './rootReducer';
import {initialState} from './inititalState';


export const store = createStore(reducer,initialState);


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
