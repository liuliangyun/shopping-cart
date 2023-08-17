import './index.css'
import { connect } from 'react-redux'
import { actionCreator } from '../../../../store/cart'

const ProductItem = (props) => {
  const { data } = props
  const { addCartItem } = props
  const addToShoppingCart = () => {
    console.log('add to shopping cart')
    addCartItem(data)
  }
  
  return (
    <div className="product-item">
      <div>
        <span className="product-name">{data.name}</span>
        <span className="product-price">({data.price}元)</span>
      </div>
      <div className="product-description">{data.description}</div>
      <button className="add-to-shopping-cart" onClick={addToShoppingCart}>添加到购物车</button>
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (item) => {
      console.log('dispatch ADD_CART_ITEM action')
      dispatch(actionCreator.addCartItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
