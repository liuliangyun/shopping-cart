import { render, screen } from '@testing-library/react';
import ProductList from './index';
import { BrowserRouter } from 'react-router-dom';

test('should render Header component', () => {
  render(<BrowserRouter><ProductList /></BrowserRouter>);
  const headerComponent = screen.getByText('产品列表');
  expect(headerComponent).toBeInTheDocument();
});
