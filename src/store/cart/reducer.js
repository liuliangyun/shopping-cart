import { GET_CART_ITEMS } from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  items: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS: {
      console.log('handle GET_CART_ITEMS action')
      return state.set('items', fromJS(action.payload))
    }
    default:
      return state;
  }
};
