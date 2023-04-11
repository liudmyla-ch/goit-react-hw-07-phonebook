import { useDispatch } from 'react-redux';
import css from './Contacts.module.css'
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <li key={contact.id} className={css.item}>
      {contact.name}: {contact.phone}
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
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
