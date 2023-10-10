import css from '../contactList/contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, removeContact } from 'redux/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error)
  const loading = useSelector(state => state.contacts.isLoading)
  const dispatch = useDispatch();

  const getContacts = (contacts, filterValue) => {
    if (filterValue) {
      const normalazedContact = filterValue.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalazedContact)
      );
    }
    return contacts;
  };
  const visibleContacts = getContacts(contacts, filterValue);
  
  return (
    <>
    {error && alert('Whoops! Something wrong(((')}
    {loading && <div>Loading in process...</div>}
      {contacts && (
        <ul className={css.contactList}>
          {visibleContacts.map(({ id, name, phone }) => (
            <li key={id} className={css.contactListItem}>
              <div>
                {name} : {phone} 
              </div>
              <button
                type="button"
                className={css.deleteBtn}
                onClick={() => {
                  dispatch(removeContact(id))
                  .then(alert(`${name} succesfully deleted`))
                  .then(dispatch(getAllContacts()));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
