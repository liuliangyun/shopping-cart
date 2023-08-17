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
