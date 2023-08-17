import { render } from '@testing-library/react';
import ProductList from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { actionCreator } from '../../store/product'

const mockStore = configureStore();
const initState = fromJS({
  product: {
    list: [
      {id:'1', name:'p1'},
      {id:'2', name: 'p2'},
    ]
  }
})
const store = mockStore(initState)

describe('ProductList test', () => {
  let container = null
  
  beforeEach(() => {
    const view = render(<Provider store={store}><ProductList /></Provider>)
    container = view.container;
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct count product item', () => {
    expect(container.getElementsByClassName('product-item').length).toBe(2)
  })
  
  test('should dispatch getProductList action', () => {
    const actions = store.getActions()
    const expectedAction = actionCreator.getProductList()
    expect(actions).toContainEqual(expectedAction)
  })
})

