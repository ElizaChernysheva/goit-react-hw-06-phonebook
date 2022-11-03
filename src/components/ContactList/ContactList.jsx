import React from 'react';
import css from './ContactList.module.css'
import ContactItem from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from '../redux/filter/filterSelector';
import { getContacts } from '../redux/contacts/contactSelector';

const ContactList = ({removeItem}) =>{
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts)

  let filteredArr = contacts.filter(contact => contact.name.toLowerCase().includes(filter))

  return(
  <ul className={css.contactList}>
    {filteredArr.map(contact => <ContactItem key ={contact.id} contact={contact} removeItem={removeItem}/>)}
  </ul>
)
}

ContactList.propTypes = {
  removeItem:PropTypes.func.isRequired,
}

export default ContactList;
