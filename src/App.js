import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ShoppingCart from './pages/ShoppingCart'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/" element={<Navigate replace to="/products" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
