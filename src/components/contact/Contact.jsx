import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './Contacts.module.css'
import PropTypes from 'prop-types';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <li key={contact.id} className={css.item}>
      {contact.name}: {contact.number}
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
