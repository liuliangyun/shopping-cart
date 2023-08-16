import { render, screen } from '@testing-library/react';
import CartItem from './index.js';

const mockCartItem = {
  id: 'id1',
  name: 'product1',
  price: 100,
  description: '第一个商品',
  count: 10,
}

describe('Index test', () => {
  let container = null
  
  beforeEach(() => {
    const comp = render(<CartItem data={mockCartItem} />)
    container = comp.container;
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct item data', () => {
    expect(screen.getByText('product1')).toBeInTheDocument();
    expect(screen.getByText('(100元)')).toBeInTheDocument();
    expect(screen.getByRole('textbox').value).toBe('10');
  })
})
