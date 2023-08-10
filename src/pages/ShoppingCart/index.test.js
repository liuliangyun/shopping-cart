import { render, screen } from '@testing-library/react';
import ShoppingCart from './index';
import { BrowserRouter } from 'react-router-dom';

test('should render Header component', () => {
  render(<BrowserRouter><ShoppingCart /></BrowserRouter>);
  const headerComponent = screen.getByText('购物车');
  expect(headerComponent).toBeInTheDocument();
});
