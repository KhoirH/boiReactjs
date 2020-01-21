import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './persistance';

const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composedEnhancers = compose(
  middlewareEnhancer,
);

const store = createStore(reducers, undefined, composedEnhancers);
const persistor = persistStore(store);
export default {
  store,
  persistor,
};
