import { combineReducers } from 'redux-immutable';
import { reducer as productReducer } from './product'

export default combineReducers ({
  product: productReducer
});
