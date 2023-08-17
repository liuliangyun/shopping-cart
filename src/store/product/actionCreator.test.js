import * as actionCreator from './actionCreator';
import { GET_PRODUCT_LIST } from './actionTypes';

describe('product actionCreator test', () => {
  test('should create GET_PRODUCT_LIST action correct', () => {
    expect(actionCreator.getProductList()).toEqual({
      type: GET_PRODUCT_LIST,
      payload: actionCreator.mockProductList,
    })
  })
})
