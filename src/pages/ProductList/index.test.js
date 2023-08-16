import { render } from '@testing-library/react';
import ProductList from './index';

describe('ProductList test', () => {
  let container = null
  
  beforeEach(() => {
    const view = render(<ProductList />)
    container = view.container;
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct count product item', () => {
    expect(container.getElementsByClassName('product-item').length).toBe(2)
  })
  
  // test('should dispatch getProductList action', () => {
  // })
})

