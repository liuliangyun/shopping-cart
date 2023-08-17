import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductItem from './index.js';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { actionCreator } from '../../../../store/cart';

const mockProduct = {
  id: 'id1',
  name: 'product1',
  price: 10,
  description: '第一个商品',
}
const mockStore = configureStore();
const initState = fromJS({
  cart: {
    items: []
  }
})
const store = mockStore(initState)

describe('ProductItem test', () => {
  
  beforeEach(() => {
    render(<Provider store={store}><ProductItem data={mockProduct} /></Provider>)
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct product data', () => {
    expect(screen.getByText('product1')).toBeInTheDocument();
    expect(screen.getByText('(10元)')).toBeInTheDocument();
    expect(screen.getByText('第一个商品')).toBeInTheDocument();
  })
  
  test('should dispatch ADD_CART_ITEM action when click add-to-shopping-cart button', async () => {
    const buttonElement = screen.getByText('添加到购物车');
    await userEvent.click(buttonElement);
    const actions = store.getActions();
    const expectedAction = actionCreator.addCartItem(mockProduct);
    expect(actions).toContainEqual(expectedAction);
  })
})
