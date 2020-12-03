import { createStore, compose, applyMiddleware } from 'redux';
import Reducers from './RootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


if (__DEV__) {
    reducCompose = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(Reducers, applyMiddleware(logger, thunk))
}

export default configureStore;