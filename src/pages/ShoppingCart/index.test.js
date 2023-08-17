import { render, screen, waitFor } from '@testing-library/react';
import ShoppingCart from './index';
import userEvent from '@testing-library/user-event';
import { PROMOTION_TYPES } from '../../utils/constants';
import * as PriceUtils from '../../utils/priceUtils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { actionCreator } from '../../store/cart';

const mockStore = configureStore();
const initState = fromJS({
  cart: {
    items: [
      {id:'1', name:'c1'},
      {id:'2', name: 'c2'},
    ]
  }
})
const store = mockStore(initState)

describe('ShoppingCart test', () => {
  let container = null
  
  beforeEach(() => {
    jest.spyOn(PriceUtils, 'getSumPrice', '').mockReturnValue(5);
    jest.spyOn(PriceUtils, 'getTotalPrice', '').mockImplementation((items, promotion) => {
      switch (promotion) {
        case PROMOTION_TYPES.FULL_200_MINUS_30:
          return 1;
        case PROMOTION_TYPES.FULL_300_MINUS_50:
          return 2;
        case PROMOTION_TYPES.FIVE_PERCENT_OFF:
          return 3;
        default:
          return 4;
      }
    });
    const view = render(<Provider store={store}><ShoppingCart /></Provider>);
    container = view.container;
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render correct count product item', () => {
    expect(container.getElementsByClassName('cart-item').length).toBe(2)
  })
  
  test('should dispatch getCartItems action', () => {
    const actions = store.getActions()
    const expectedAction = actionCreator.getCartItems()
    expect(actions).toContainEqual(expectedAction)
  })
  
  test('should render correct sum price', () => {
    expect(PriceUtils.getSumPrice).toHaveBeenCalled()
    expect(screen.getByText('总价：5元')).toBeInTheDocument()
  })
  
  test('should render correct total price when choose FULL_200_MINUS_30', async () => {
    const selectElement = screen.getByRole('combobox');
    await userEvent.selectOptions(selectElement, PROMOTION_TYPES.FULL_200_MINUS_30);
    await waitFor(() => {
      expect(screen.getByText('实付：1元')).toBeInTheDocument();
    })
  })

  test('should render correct total price when choose FULL_300_MINUS_50', async () => {
    const selectElement = screen.getByRole('combobox');
    await userEvent.selectOptions(selectElement, PROMOTION_TYPES.FULL_300_MINUS_50);
    await waitFor(() => {
      expect(screen.getByText('实付：2元')).toBeInTheDocument();
    })
  })

  test('should render correct total price when choose FIVE_PERCENT_OFF', async () => {
    const selectElement = screen.getByRole('combobox');
    await userEvent.selectOptions(selectElement, PROMOTION_TYPES.FIVE_PERCENT_OFF);
    await waitFor(() => {
      expect(screen.getByText('实付：3元')).toBeInTheDocument();
    })
  })
})

