import {createStore, applyMiddleware} from 'redux';
import Reducers from './RootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(Reducers, applyMiddleware(logger, thunk));
};

export default configureStore;
