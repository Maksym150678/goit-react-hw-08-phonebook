import { combineReducers } from 'redux';
import contactsReducer from './items/itemsSlice';
import filterReducer from './filter/filterReducer';
import authReducer from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;