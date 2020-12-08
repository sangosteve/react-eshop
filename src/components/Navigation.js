import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <div className="navigation-wrapper">
     <navbar>
       <ul>
         <Link className="brand"  to="/">
         <h2>Eshop</h2>
         </Link>
         <Link className="nav-link" to="/cart">
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
         <li>Cart</li>
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
