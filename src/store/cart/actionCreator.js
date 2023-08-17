import { ADD_CART_ITEM } from './actionTypes';

export const addCartItem = (item) => {
  console.log('create ADD_CART_ITEM action')
  return {
    type: ADD_CART_ITEM,
    payload: item,
  }
};

