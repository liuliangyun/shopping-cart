import { getSumPrice, getTotalPrice } from './priceUtils';
import { PROMOTION_TYPES } from './constants';

describe('PriceUtils test', () => {
  test('should compute correct sum price', () => {
    const mockCartItems = [{
      id: '1',
      price: 2,
      count: 1,
    }, {
      id: '2',
      price: 4,
      count: 2,
    }, {
      id: '3',
      price: 7,
      count: 3,
    }]
    expect(getSumPrice(mockCartItems)).toEqual(31)
  });
  test('should compute correct sum price when cartItems is empty', () => {
    const mockCartItems = []
    expect(getSumPrice(mockCartItems)).toEqual(0)
  });
  test('should compute correct total price when not choose any promotion', () => {
    const mockCartItems = [{
      id: '1',
      price: 200,
      count: 1,
    }, {
      id: '2',
      price: 400,
      count: 2,
    }, {
      id: '3',
      price: 70,
      count: 3,
    }]
    expect(getTotalPrice(mockCartItems, null)).toEqual(1210)
  });
  test('should compute correct total price when not choose FULL_200_MINUS_30 promotion', () => {
    const mockCartItems = [{
      id: '1',
      price: 200,
      count: 1,
    }, {
      id: '2',
      price: 400,
      count: 2,
    }, {
      id: '3',
      price: 70,
      count: 3,
    }]
    expect(getTotalPrice(mockCartItems, PROMOTION_TYPES.FULL_200_MINUS_30)).toEqual(1030)
  });
  test('should compute correct total price when not choose FULL_300_MINUS_50 promotion', () => {
    const mockCartItems = [{
      id: '1',
      price: 200,
      count: 1,
    }, {
      id: '2',
      price: 400,
      count: 2,
    }, {
      id: '3',
      price: 70,
      count: 3,
    }]
    expect(getTotalPrice(mockCartItems, PROMOTION_TYPES.FULL_300_MINUS_50)).toEqual(1010)
  });
  test('should compute correct total price when not choose FIVE_PERCENT_OFF promotion', () => {
    const mockCartItems = [{
      id: '1',
      price: 200,
      count: 1,
    }, {
      id: '2',
      price: 400,
      count: 2,
    }, {
      id: '3',
      price: 70,
      count: 3,
    }]
    expect(getTotalPrice(mockCartItems, PROMOTION_TYPES.FIVE_PERCENT_OFF)).toEqual(1149.5)
  });
})
