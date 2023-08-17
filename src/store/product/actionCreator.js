import { GET_PRODUCT_LIST } from './actionTypes';

export const mockProductList = [{
  id: 'id1',
  name: 'product1',
  price: 10,
  description: '第一个商品',
},
{
  id: 'id2',
  name: 'product2',
  price: 20,
  description: '第二个商品',
}]
export const getProductList = () => {
  console.log('create GET_PRODUCT_LIST action')
  return {
    type: GET_PRODUCT_LIST,
    payload: mockProductList,
  }
};

