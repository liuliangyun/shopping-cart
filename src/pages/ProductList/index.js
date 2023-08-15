import ProductItem from './components/ProductItem'
import { useState } from 'react'

const mockProductList = [
  {
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
  },
]

const ProductList = () => {
  const [productList] = useState(mockProductList);
  
  return (
    <div>
      {productList.map(product => <ProductItem key={product.id} data={product} />)}
    </div>
  )
}

export default ProductList;
