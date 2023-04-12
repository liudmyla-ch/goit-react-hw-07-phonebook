import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import Contact from 'components/contact/Contact';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
 
  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
