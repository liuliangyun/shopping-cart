import { ADD_CART_ITEM, GET_CART_ITEMS } from './actionTypes';

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

