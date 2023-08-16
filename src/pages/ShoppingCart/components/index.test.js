import { render, screen, waitFor } from '@testing-library/react';
import CartItem from './index.js';
import userEvent from '@testing-library/user-event';

const mockCartItem = {
  id: 'id1',
  name: 'product1',
  price: 100,
  description: '第一个商品',
  count: 10,
}

describe('Index test', () => {
  
  beforeEach(() => {
    render(<CartItem data={mockCartItem} />)
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
    await waitFor(() => {
      expect(screen.getByRole('textbox').value).toBe('11');
    })
  })
  
  test('should decrease count when click decrease button', async () => {
    const decreaseElement = screen.getByRole('button', { name: '-' });
    await userEvent.click(decreaseElement)
    await waitFor(() => {
      expect(screen.getByRole('textbox').value).toBe('9');
    })
  })
})
