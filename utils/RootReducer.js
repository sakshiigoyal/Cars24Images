import {combineReducers} from 'redux';
import ImageListReducer from './ImageListReducer';

const rootReducer = combineReducers({
  imageListReducer: ImageListReducer,
});

export default rootReducer;
