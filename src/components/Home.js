import React,{useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import {ProductsContext} from './ProductsContext';
import {CartContext} from './CartContext'
import { v4 as uuidv4 } from 'uuid';
import "./Home.css"

function Home() {

  const [products,setProducts] = useContext(ProductsContext);
  const [product_cart, setProductCart] = useContext(CartContext)

  const addToCart = (product)=>{
    setProductCart([...product_cart,{...product}]);
  }
 
  return (
    <div className="products-wrapper">
      {
        products.map(product=>(
          <div className="product-card">
            <div className="img-wrapper">
            <img src={product.image}/>
            </div>
            <div className="product-description">
            <span className="category"><h5>{product.name}</h5></span>
            <span className="name">${product.price}</span>
            <span className="price">{product.category}</span>
            </div>

            <button onClick={()=>addToCart(product)} className="btn-add-to-cart">Add to cart</button>

          </div>
        ))
      }
    </div>
  );
}

export default Home;
