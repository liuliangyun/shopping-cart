import { PROMOTION_TYPES } from './constants';

export const getSumPrice = (cartItems) => {
  let sum = 0
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].price * cartItems[i].count
  }
  return sum
}

export const getTotalPrice = (cartItems, promotion) => {
  const sum = getSumPrice(cartItems)
  switch (promotion) {
    case PROMOTION_TYPES.FULL_200_MINUS_30:
      return sum - Math.floor(sum / 200) * 30;
    case PROMOTION_TYPES.FULL_300_MINUS_50:
      return sum - Math.floor(sum / 300) * 50;
    case PROMOTION_TYPES.FIVE_PERCENT_OFF:
      return sum * 0.95;
    default:
      return sum;
  }
}
