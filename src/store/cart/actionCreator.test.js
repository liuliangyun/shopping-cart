import * as actionCreator from './actionCreator';
import { ADD_CART_ITEM, GET_CART_ITEMS, INCREASE_CART_ITEM_COUNT, DECREASE_CART_ITEM_COUNT } from './actionTypes';

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
  
  test('should create INCREASE_CART_ITEM_COUNT action correct', () => {
    expect(actionCreator.increaseCartItemCount({ id:'2', name:'product2' })).toEqual({
      type: INCREASE_CART_ITEM_COUNT,
      payload: { id:'2', name:'product2' },
    })
  })
  
  test('should create DECREASE_CART_ITEM_COUNT action correct', () => {
    expect(actionCreator.decreaseCartItemCount({ id:'1', name:'product1' })).toEqual({
      type: DECREASE_CART_ITEM_COUNT,
      payload: { id:'1', name:'product1' },
    })
  })
})
