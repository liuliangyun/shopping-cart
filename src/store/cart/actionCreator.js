import { ADD_CART_ITEM, GET_CART_ITEMS, INCREASE_CART_ITEM_COUNT, DECREASE_CART_ITEM_COUNT } from './actionTypes';
import { getStorage, addCartItemToStorage, removeCartItemFromStorage } from '../../storage';

export const addCartItem = (item) => {
  console.log('create ADD_CART_ITEM action')
  addCartItemToStorage(item)
  return {
    type: ADD_CART_ITEM,
    payload: item,
  }
};

export const getCartItems = () => {
  console.log('create GET_CART_ITEMS action')
  return {
    type: GET_CART_ITEMS,
    payload: getStorage('cartItems'),
  }
};

export const increaseCartItemCount = (item) => {
  console.log('create INCREASE_CART_ITEM_COUNT action')
  addCartItemToStorage(item)
  return {
    type: INCREASE_CART_ITEM_COUNT,
    payload: item,
  }
};

export const decreaseCartItemCount = (item) => {
  console.log('create DECREASE_CART_ITEM_COUNT action')
  removeCartItemFromStorage(item)
  return {
    type: DECREASE_CART_ITEM_COUNT,
    payload: item,
  }
};

