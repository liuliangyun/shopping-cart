import CartItem from './components'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { actionCreator } from '../../store/cart'
import { getSumPrice, getTotalPrice } from '../../utils/priceUtils'
import { PROMOTION_TYPES } from '../../utils/constants'
import './index.css'

const ShoppingCart = (props) => {
  const { cartItems } = props;  // 获取从mapStateToProps传入的参数
  const { getCartItems } = props;  // 获取从mapDispatchToProps传入的方法
  
  useEffect(() => {
    // react18新特性：之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。为了帮助开发者提前发现重复挂载造成的 Bug 的代码。 仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
    console.log('useEffect callback')
    getCartItems()
  }, [])
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.getIn(['cart', 'items']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems: () => {
      console.log('dispatch GET_CART_ITEMS action')
      dispatch(actionCreator.getCartItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
