import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/products">产品列表</NavLink>
        </li>
        <li>
          <NavLink to="/cart">购物车</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
