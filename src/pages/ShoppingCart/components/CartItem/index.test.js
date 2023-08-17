import { render, screen } from '@testing-library/react';
import CartItem from './index.js';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { actionCreator } from '../../../../store/cart';

const mockCartItem = {
  id: 'id1',
  name: 'product1',
  price: 100,
  description: '第一个商品',
  count: 10,
}
const mockStore = configureStore();
const initState = fromJS({
  cart: {
    items: []
  }
})
const store = mockStore(initState)

describe('Index test', () => {
  
  beforeEach(() => {
    render(<Provider store={store}><CartItem data={mockCartItem} /></Provider>)
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct item data', () => {
    expect(screen.getByText('product1')).toBeInTheDocument();
    expect(screen.getByText('(100元)')).toBeInTheDocument();
    expect(screen.getByRole('textbox').value).toBe('10');
  })
  
  test('should increase count when click increase button', async () => {
    const increaseElement = screen.getByRole('button', { name: '+' });
    await userEvent.click(increaseElement)
    const actions = store.getActions();
    const expectedAction = actionCreator.increaseCartItemCount(mockCartItem);
    expect(actions).toContainEqual(expectedAction);
  })
  
  test('should decrease count when click decrease button', async () => {
    const decreaseElement = screen.getByRole('button', { name: '-' });
    await userEvent.click(decreaseElement)
    const actions = store.getActions();
    const expectedAction = actionCreator.decreaseCartItemCount(mockCartItem);
    expect(actions).toContainEqual(expectedAction);
  })
})
