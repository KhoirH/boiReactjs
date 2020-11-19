import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import VARIABLES from './variables';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: VARIABLES.WHITELIST,
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
let middleware = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export default {
  persistor,
  store,
}