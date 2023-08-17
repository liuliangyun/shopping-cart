import ProductItem from './components/ProductItem'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { actionCreator } from '../../store/product'

const ProductList = (props) => {
  const { productList } = props;  // 获取从mapStateToProps传入的参数
  const { getProductList } = props;  // 获取从mapDispatchToProps传入的方法
  
  useEffect(() => {
    // react18新特性：之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。为了帮助开发者提前发现重复挂载造成的 Bug 的代码。 仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
    console.log('useEffect callback')
    getProductList()
  }, [])
  
  return (
    <div>
      {productList.map(product => <ProductItem key={product.id} data={product} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productList: state.getIn(['product', 'list']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: () => {
      console.log('dispatch GET_PRODUCT_LIST action')
      dispatch(actionCreator.getProductList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
