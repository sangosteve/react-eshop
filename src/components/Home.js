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
    //set product units
    product.units = 1;

    //CHECK IF PRODUCT ALREADY EXISTS IN THE CART,IF EXISTANT STORE THE PRODUCT OBJECT IN A VARIABLE
    const exist = product_cart.find(p=>p.id===product.id);
    
    if(exist){
      setProductCart(product_cart.map(item=>item.id===exist.id?{...exist,units:exist.units+1}:item))
      //setProductCart([...product_cart,item]);
    }else{
      setProductCart([...product_cart,{...product,units:1}]);
    }

    
    
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
