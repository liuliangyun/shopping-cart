import { GET_PRODUCT_LIST } from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      console.log('handle GET_PRODUCT_LIST action')
      return state.set('list', fromJS(action.payload))
    }
    default:
      return state;
  }
};
