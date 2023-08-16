import './index.css'
import { useState } from 'react'

const CartItem = (props) => {
  const { data } = props
  const [count, setCount] = useState(data.count)
  const handleIncreaseCount = () => {
    setCount(count+1)
  }
  const handleDecreaseCount = () => {
    setCount(count-1)
  }
  
  return (
  <div className="cart-item">
    <span className="cart-item-name">{data.name}</span>
    <span className="cart-item-price">({data.price}元)</span>
    <div className="count-controller">
      <input type="button"  value="-" onClick={handleDecreaseCount} />
      <input className="cart-item-count" type="text" value={count} readOnly />
      <input type="button"  value="+" onClick={handleIncreaseCount} />
    </div>
  </div>
  )
}

export default CartItem;
