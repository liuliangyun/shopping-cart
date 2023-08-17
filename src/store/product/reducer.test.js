import reducer from './reducer';
import * as actionCreator from './actionCreator';
import { fromJS } from 'immutable';
import { getStorage } from '../../storage';

describe('product reducer test', () => {
  it('should handle GET_PRODUCT_LIST action correct', () => {
    const state = fromJS({
      list: [{
        id: 'id1',
        name: 'product1',
        price: 10,
        description: '第一个商品',
      }]
    })
    const newState = reducer(state, actionCreator.getProductList())
    expect(newState.get('list').toJS()).toEqual(getStorage('productList'))
  })
})
