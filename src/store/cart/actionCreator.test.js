import * as actionCreator from './actionCreator';
import { ADD_CART_ITEM, GET_CART_ITEMS, INCREASE_CART_ITEM_COUNT, DECREASE_CART_ITEM_COUNT } from './actionTypes';
import { setStorage } from '../../storage';

describe('cart actionCreator test', () => {
  beforeEach(() => {
    setStorage('cartItems', [])
  })
  
  test('should create ADD_CART_ITEM action correct', () => {
    expect(actionCreator.addCartItem({id:'1', name: 'cartItem1'})).toEqual({
      type: ADD_CART_ITEM,
      payload: {id:'1', name: 'cartItem1'},
    })
  })
  
  test('should create GET_CART_ITEMS action correct', () => {
    setStorage('cartItems', [{id:'1', name: 'cartItem1', count: 1}])
    expect(actionCreator.getCartItems()).toEqual({
      type: GET_CART_ITEMS,
      payload: [{id:'1', name: 'cartItem1', count: 1}],
    })
  })
  
  test('should create INCREASE_CART_ITEM_COUNT action correct', () => {
    expect(actionCreator.increaseCartItemCount({ id:'1', name:'cartItem1', count: 1 })).toEqual({
      type: INCREASE_CART_ITEM_COUNT,
      payload: { id:'1', name:'cartItem1', count: 1 },
    })
  })
  
  test('should create DECREASE_CART_ITEM_COUNT action correct', () => {
    expect(actionCreator.decreaseCartItemCount({ id:'1', name:'product1', count: 2 })).toEqual({
      type: DECREASE_CART_ITEM_COUNT,
      payload: { id:'1', name:'product1', count: 2 },
    })
  })
})
