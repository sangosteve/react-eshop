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
  const [products, setProducts] = useState([
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

            <button className="btn-add-to-cart">Add to cart</button>

          </div>
        ))
      }
    </div>
  );
}

export default Home;
