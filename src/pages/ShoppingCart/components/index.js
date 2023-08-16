import './index.css'

const CartItem = (props) => {
  const { data } = props
  
  return (
  <div className="cart-item">
    <div>
      <span className="cart-item-name">{data.name}</span>
      <span className="cart-item-price">({data.price}元)</span>
      <input className="cart-item-count" type="text" value={data.count} readOnly />
    </div>
  </div>
  )
}

export default CartItem;
