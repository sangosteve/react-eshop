import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Account from "./components/Account";
import Cart from "./components/Cart";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ProductsProvider} from './components/ProductsContext';
import {CartProvider} from './components/CartContext';
import "./style.css";

export default function App() {
  
  return (
    <ProductsProvider>
    <CartProvider>
    <Router>
    <div className="App">
      <Navigation/>
      <Route path="/" exact component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/account" component={Account}/>
    </div>
    </Router>
    </CartProvider>  
    </ProductsProvider>
  );
}
