/**
 * store/index.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import reducers from './reducer';
import sagas from './saga';

const configureStore = initiState => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  const store = createStore(combineReducers(reducers), fromJS(initiState), enhancer);

  // Run the saga
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
