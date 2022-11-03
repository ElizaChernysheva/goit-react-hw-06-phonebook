import {initialState} from './inititalState';

export const reducer = (state = initialState,action) =>{
  switch (action.type) {
    case 'contact/addContact':
      return {
        ...state,
        contacts: [action.payload,...state.contacts]
      }
    case 'contact/removeContact':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'filter/setFilter':
      return {
        ...state,
        filter:  action.payload,
      }
    default:
      return state;
  }
}
