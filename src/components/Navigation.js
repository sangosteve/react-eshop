import React, { useState, useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import {ProductsContext} from "./ProductsContext"
import {CartContext} from "./CartContext"
import "./Navigation.css";
import {ShoppingBag} from 'react-feather'

function Navigation() {
  const [products,setProducts] = useContext(ProductsContext);
  const [product_cart,setProductCart] = useContext(CartContext);
  return (
    <div className="navigation-wrapper">
     <navbar>
       <ul>
         <Link className="brand"  to="/">
         <h2>Eshop</h2>
         </Link>
         <Link className="nav-link" to="/">
         <li>Home</li>
         </Link>
         <Link className="nav-link" to="/cart">
         <li>Product</li>
         </Link>
         <Link className="nav-link" to="/cart">
         <li>Contact</li>
         </Link>
         <Link className="nav-link" to="/cart">
         <li>About</li>
         </Link>
         <Link className="nav-link" to="/cart">
         <li><ShoppingBag/> {product_cart.length}</li>
         </Link>
         <Link className="nav-link" to="/account">
         <li>Account</li>
         </Link>
       </ul>
     </navbar>
    </div>
  );
}
export default Navigation;
