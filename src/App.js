import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
      </Routes>
    </Router>
  );
}

export default App;
