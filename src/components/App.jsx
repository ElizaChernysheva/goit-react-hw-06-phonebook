import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'
import { useDispatch,useSelector } from 'react-redux';
import {getContacts} from '../redux/contacts/contactSelector';
import {addContactAction} from '../redux/contacts/contactsSlice';
import {removeContactAction} from '../redux/contacts/contactsSlice';
import {setFilterAction} from '../redux/filter/filterSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const handleOnSubmit = ({ name,number }) => {

    if(contacts.some(el => el.name === name)){
      alert(`${name} is already in contacts`)
      return
    }

    const contact ={
      id: nanoid(),
      name,
      number,
    }

    dispatch(addContactAction(contact))
  }

  const handleOnFilterChange =({ target }) =>{
    const valueToLowerCase = target.value.toLowerCase().trim();
    dispatch(setFilterAction(valueToLowerCase))
  }

  const removeContact = (id) =>{
    dispatch(removeContactAction(id))
  }

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={handleOnSubmit}/>
        <h2>Contacts</h2>
        <Filter onFilterChange={handleOnFilterChange}/>
        <ContactList removeItem={removeContact}/>
      </div>
    );
};


export default App;
