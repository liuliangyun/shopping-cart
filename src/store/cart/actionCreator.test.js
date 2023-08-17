import * as actionCreator from './actionCreator';
import { ADD_CART_ITEM, GET_CART_ITEMS } from './actionTypes';

describe('cart actionCreator test', () => {
  test('should create ADD_CART_ITEM action correct', () => {
    expect(actionCreator.addCartItem({ id:'3', name:'product3' })).toEqual({
      type: ADD_CART_ITEM,
      payload: { id:'3', name:'product3' },
    })
  })
  
  test('should create GET_CART_ITEMS action correct', () => {
    expect(actionCreator.getCartItems()).toEqual({
      type: GET_CART_ITEMS,
      payload: actionCreator.mockCartItems,
    })
  })
})
