export const mockProductList = [{
  id: 'id1',
  name: 'product1',
  price: 10,
  description: '第一个商品',
},
{
  id: 'id2',
  name: 'product2',
  price: 20,
  description: '第二个商品',
}]
export const getStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err)
  }
}
export const setStorage = (key, data) => {
  const newData = JSON.stringify(data)
  localStorage.setItem(key, newData)
}
setStorage('productList', mockProductList)
setStorage('cartItems', [])

export const addCartItemToStorage = (item) => {
  const cartItems = getStorage('cartItems')
  const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
  if (index === -1) {
    const cartItem = { ...item, count: 1 }
    cartItems.push(cartItem)
  } else {
    const cartItem = { ...cartItems[index], count: cartItems[index].count + 1 }
    cartItems[index] = cartItem
  }
  setStorage('cartItems', cartItems)
  return cartItems
}

export const removeCartItemFromStorage = (item) => {
  const cartItems = getStorage('cartItems')
  const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
  if (index === -1) {
    console.error('该产品已从购物车移除')
  } else {
    const cartItem = { ...cartItems[index], count: cartItems[index].count - 1 }
    cartItems[index] = cartItem
  }
  setStorage('cartItems', cartItems)
  return cartItems
}
