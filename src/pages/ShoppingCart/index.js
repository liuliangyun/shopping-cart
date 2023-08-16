import CartItem from './components'
import { useState } from 'react'
import { getSumPrice, getTotalPrice } from '../../utils/priceUtils'
import { PROMOTION_TYPES } from '../../utils/constants'
import './index.css'

const mockCartItems = [
  {
    id: 'id1',
    name: 'product1',
    price: 100,
    description: '第一个商品',
    count: 1,
  },
  {
    id: 'id2',
    name: 'product2',
    price: 200,
    description: '第二个商品',
    count: 2,
  },
]

const ShoppingCart = () => {
  const [cartItems] = useState(mockCartItems);
  const [promotion, setPromotion] = useState('');
  const handlePromotionChange = (event) => {
    setPromotion(event.target.value)
  }
  
  return (
  <div>
    {cartItems.map(item => <CartItem key={item.id} data={item} />)}
    <div className="shopping-cart-price">
      <select className="promotion-select" value={promotion} onChange={handlePromotionChange}>
        <option value="">请选择优惠方式</option>
        {
          Object.values(PROMOTION_TYPES).map(type => {
            return (
            <option key={type} value={type}>{type}</option>
            )
          })
        }
      </select>
      <span className="sum-price">总价：{getSumPrice(cartItems)}元</span>
      <span className="total-price">实付：{getTotalPrice(cartItems, promotion)}元</span>
    </div>
  </div>
  )
}

export default ShoppingCart;
