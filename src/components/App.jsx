import css from './App.module.css';
import ContactForm from './contactForm/contactForm.js';
import Filter from './filter/filter.js';
import ContactList from './contactList/contactList.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllContacts } from 'redux/slice';

export const App = () => {
const dispatch = useDispatch()
const contacts = useSelector(state => state.contacts.items);
const error = useSelector(state => state.contacts.error)
const loading = useSelector(state => state.contacts.isLoading)

useEffect(()=>{
    dispatch(getAllContacts())
  }, [dispatch])

  
  return (
    <>
    {error && alert('Whoops! Something wrong(((')}
    {loading && <div>Loading in process...</div>}
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm />

        {contacts?.length > 0 && (
          <div className={css.contactsWrapper}>
            <h2>Contacts</h2>
            <p>Total quantity of your contacts: {contacts?.length}</p>
            <Filter />
            <ContactList />
          </div>
        )}

        {contacts?.length === 0 && <p>Your contacts will be here</p>}
      </div>
    </>
  );
};
