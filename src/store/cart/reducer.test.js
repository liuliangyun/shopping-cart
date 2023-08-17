import reducer from './reducer';
import * as actionCreator from './actionCreator';
import { fromJS } from 'immutable';
import { getStorage } from '../../storage';

describe('cart reducer test', () => {
  it('should handle GET_CART_ITEMS action correct', () => {
    const state = fromJS({
      items: [{
        id: 'id1',
        name: 'item1',
        price: 10,
        description: '第一个购物车商品',
      }]
    })
    const newState = reducer(state, actionCreator.getCartItems())
    expect(newState.get('items').toJS()).toEqual(getStorage('cartItems'))
  })
})
