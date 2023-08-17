import * as actionCreator from './actionCreator';
import { GET_PRODUCT_LIST } from './actionTypes';
import { setStorage } from '../../storage';

describe('product actionCreator test', () => {
  beforeEach(() => {
    setStorage('productList', [])
  })
  test('should create GET_PRODUCT_LIST action correct', () => {
    setStorage('productList', [{id: 1, name: 'p1'}])
    expect(actionCreator.getProductList()).toEqual({
      type: GET_PRODUCT_LIST,
      payload: [{id: 1, name: 'p1'}],
    })
  })
})
