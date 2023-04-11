import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlise';

const FilterSchema = yup.object().shape({
  filter: yup.string().required(),
});

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <>
      <Formik initialValues={{ filter: '' }} validationSchema={FilterSchema}>
        {({ values, handleChange }) => (
          <Form autoComplete="off">
            <label className={css.label}>
              Find contacts by name
              <Field
                name="filter"
                type="search"
                value={values.filter}
                onChange={evt => {
                  handleChange(evt);
                  handleChangeFilter(evt);
                }}
                className={css['filter-input']}
              />
            </label>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Filter;
