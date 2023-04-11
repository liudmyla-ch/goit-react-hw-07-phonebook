import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from 'components/contact/Contact';

const ContactList = () => {
  const filters = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  let visibleContacts;

  if (contacts?.length > 0) {
    filters !== ''
      ? (visibleContacts = contacts.filter(contact =>
          contact.name.toLowerCase().includes(filters.toLowerCase())
        ))
      : (visibleContacts = contacts);
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
