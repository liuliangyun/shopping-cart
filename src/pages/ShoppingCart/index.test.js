import { render } from '@testing-library/react';
import ShoppingCart from './index';

describe('ShoppingCart test', () => {
  let container = null
  
  beforeEach(() => {
    const comp = render(<ShoppingCart />)
    container = comp.container;
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct count product item', () => {
    expect(container.getElementsByClassName('cart-item').length).toBe(2)
  })
})

