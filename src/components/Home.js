import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
  const [product, setProduct] = useState({
    name: "",
    image:"",
    category:"",
    price: 0
  });
  const [cart, setCart] = useState([
    {
      name:"Black Hoodie",
      image:"./images/hoodie.png",
      category:"category",
      price:230
    },
    {
      name:"Black Hoodie",
      image:"./images/watch.png",
      category:"category",
      price:129
    },
    {
      name:"Black Hoodie",
      image:"./images/shoe.png",
      category:"category",
      price:45
    },
    {
      name:"Black Hoodie",
      image:"./images/watch.png",
      category:"category",
      price:22
    },
    
    ]);
  return (
    <div className="products-wrapper">
      {
        cart.map(product=>(
          <div className="product-card">
            <div className="img-wrapper">
            <img src={product.image}/>
            </div>
            <div className="product-description">
            <span className="category">{product.category}</span>
            <span className="name">{product.name}</span>
            <span className="price">{product.price}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
