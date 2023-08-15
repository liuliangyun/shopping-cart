export const getSumPrice = (cartItems) => {
  let sum = 0
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].price * cartItems[i].count
  }
  return sum
}
