import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import reducers from './reducers';

const configureStore = initiState => {
  const enhancer = compose(applyMiddleware(thunkMiddleware));

  const store = createStore(combineReducers(reducers), initiState, enhancer);

  return { store };
};

export default configureStore;
