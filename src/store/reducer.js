import { combineReducers } from 'redux-immutable';
import { reducer as productReducer } from './product'
import { reducer as cartReducer } from './cart'

export default combineReducers ({
  product: productReducer,
  cart: cartReducer
});
