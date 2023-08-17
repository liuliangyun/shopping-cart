import './index.css'
import { connect } from 'react-redux'
import { actionCreator } from '../../../../store/cart'

const CartItem = (props) => {
  const { data } = props
  const { increaseCartItemCount, decreaseCartItemCount } = props
  const handleIncreaseCount = () => {
    increaseCartItemCount(data)
  }
  const handleDecreaseCount = () => {
    decreaseCartItemCount(data)
  }
  
  return (
  <div className="cart-item">
    <span className="cart-item-name">{data.name}</span>
    <span className="cart-item-price">({data.price}元)</span>
    <div className="count-controller">
      <input type="button"  value="-" onClick={handleDecreaseCount} />
      <input className="cart-item-count" type="text" value={data.count} readOnly />
      <input type="button"  value="+" onClick={handleIncreaseCount} />
    </div>
  </div>
  )
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCartItemCount: (item) => {
      console.log('dispatch INCREASE_CART_ITEM_COUNT action')
      dispatch(actionCreator.increaseCartItemCount(item))
    },
    decreaseCartItemCount: (item) => {
      console.log('dispatch DECREASE_CART_ITEM_COUNT action')
      dispatch(actionCreator.decreaseCartItemCount(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);