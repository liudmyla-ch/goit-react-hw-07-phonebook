import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlise';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


