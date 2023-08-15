import './index.css'

const ProductItem = (props) => {
  const { data } = props
  const addToShoppingCart = () => {
    console.log('add to shopping cart')
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

export default ProductItem;
