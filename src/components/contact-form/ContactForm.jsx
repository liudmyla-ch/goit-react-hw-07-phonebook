import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { name, phone } = values;
   
    if (
      (contacts.length > 0) &
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({name, phone}));
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    phone: Yup.string()
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} required />
            {errors.name && touched.name && (
              <div className={css.error}>{errors.name}</div>
            )}
          </label>
          <label className={css.label}>
            Number
            <Field type="tel" name="phone" className={css.input} required />
            {errors.number && touched.number && (
              <div className={css.error}>{errors.number}</div>
            )}
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
