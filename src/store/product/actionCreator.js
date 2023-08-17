import { GET_PRODUCT_LIST } from './actionTypes';
import { getStorage } from '../../storage';

export const getProductList = () => {
  console.log('create GET_PRODUCT_LIST action')
  return {
    type: GET_PRODUCT_LIST,
    payload: getStorage('productList'),
  }
};

