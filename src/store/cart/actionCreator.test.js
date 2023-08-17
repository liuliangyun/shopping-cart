import * as actionCreator from './actionCreator';
import { ADD_CART_ITEM } from './actionTypes';

describe('cart actionCreator test', () => {
  test('should create ADD_CART_ITEM action correct', () => {
    expect(actionCreator.addCartItem({ id:'3', name:'product3' })).toEqual({
      type: ADD_CART_ITEM,
      payload: { id:'3', name:'product3' },
    })
  })
})
