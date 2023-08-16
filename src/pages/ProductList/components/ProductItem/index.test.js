import { render, screen } from '@testing-library/react';
import ProductItem from './index.js';

const mockProduct = {
  id: 'id1',
  name: 'product1',
  price: 10,
  description: '第一个商品',
}

describe('ProductItem test', () => {
  beforeEach(() => {
    render(<ProductItem data={mockProduct} />)
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct product data', () => {
    expect(screen.getByText('product1')).toBeInTheDocument();
    expect(screen.getByText('(10元)')).toBeInTheDocument();
    expect(screen.getByText('第一个商品')).toBeInTheDocument();
  })
})
