import CartItem from './components/CartItem'
import { useState } from 'react'

const mockCartItems = [
  {
    id: 'id1',
    name: 'product1',
    price: 10,
    description: '第一个商品',
    count: 1,
  },
  {
    id: 'id2',
    name: 'product2',
    price: 20,
    description: '第二个商品',
    count: 2,
  },
]

const ShoppingCart = () => {
  const [cartItems] = useState(mockCartItems);
  
  return (
  <div>
    {cartItems.map(item => <CartItem key={item.id} />)}
  </div>
  )
}

export default ShoppingCart;
