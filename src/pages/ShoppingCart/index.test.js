import { render, screen, act } from '@testing-library/react';
import ShoppingCart from './index';
import userEvent from '@testing-library/user-event';
import { PROMOTION_TYPES } from '../../utils/constants';

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
  
  test('should render correct sum price', () => {
    expect(screen.getByText('总价：500元')).toBeInTheDocument();
  })
  
  test('should render correct total price when choose FULL_200_MINUS_30', () => {
    const selectElement = screen.getByRole('combobox');
    act(() => {
      userEvent.selectOptions(selectElement, PROMOTION_TYPES.FULL_200_MINUS_30);
    })
    expect(screen.getByText('实付：440元')).toBeInTheDocument();
  })
  
  test('should render correct total price when choose FULL_300_MINUS_50', () => {
    const selectElement = screen.getByRole('combobox');
    act(() => {
      userEvent.selectOptions(selectElement, PROMOTION_TYPES.FULL_300_MINUS_50);
    })
    expect(screen.getByText('实付：450元')).toBeInTheDocument();
  })
  
  test('should render correct total price when choose FIVE_PERCENT_OFF', () => {
    const selectElement = screen.getByRole('combobox');
    act(() => {
      userEvent.selectOptions(selectElement, PROMOTION_TYPES.FIVE_PERCENT_OFF);
    })
    expect(screen.getByText('实付：475元')).toBeInTheDocument();
  })
})

