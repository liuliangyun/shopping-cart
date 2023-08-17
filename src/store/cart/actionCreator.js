import { ADD_CART_ITEM, GET_CART_ITEMS, INCREASE_CART_ITEM_COUNT, DECREASE_CART_ITEM_COUNT } from './actionTypes';

export const mockCartItems = [
  {
    id: 'id1',
    name: 'product1',
    price: 100,
    description: '第一个商品',
    count: 1,
  },
  {
    id: 'id2',
    name: 'product2',
    price: 200,
    description: '第二个商品',
    count: 2,
  },
]

export const addCartItem = (item) => {
  console.log('create ADD_CART_ITEM action')
  return {
    type: ADD_CART_ITEM,
    payload: item,
  }
};

export const getCartItems = () => {
  console.log('create GET_CART_ITEMS action')
  return {
    type: GET_CART_ITEMS,
    payload: mockCartItems,
  }
};

export const increaseCartItemCount = (item) => {
  console.log('create INCREASE_CART_ITEM_COUNT action')
  return {
    type: INCREASE_CART_ITEM_COUNT,
    payload: item,
  }
};

export const decreaseCartItemCount = (item) => {
  console.log('create DECREASE_CART_ITEM_COUNT action')
  return {
    type: DECREASE_CART_ITEM_COUNT,
    payload: item,
  }
};

