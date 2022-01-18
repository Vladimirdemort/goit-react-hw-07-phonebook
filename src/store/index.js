import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const configStore = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(configStore);
const store = { configStore, persistor };
export default store;
