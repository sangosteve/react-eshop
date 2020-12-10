import React,{useEffect,useContext,useState} from 'react';
import {CartContext} from './CartContext';
import "./Cart.css"
import { Table } from 'reactstrap';
import {Trash2} from 'react-feather';

function Cart(){
    const [cart,setCart] = useContext(CartContext);
    const [productQty,setProdQty]=useState(0);
    function removeFromCart(productToRemove){
        setCart(cart.filter(product=>product!==productToRemove))
    }

    const increaseQty = (qty)=>{
      qty=qty+1;
      console.log(qty);
    }
    return(
        <div className="cart-wrapper">
                    <>
                    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
        
        </tr>
      </thead>
      <tbody>
        
            {
                cart.map(product=>(
                   <tr> 
                       <td className="product-del">
                       <Trash2 className="btn-del" onClick={()=>removeFromCart(product)} color="red"/>
                       </td>
          <td className="product-name">
              <img src={product.image}/>
              {product.name}
              </td>
          <td>
            {product.price}        
          </td>
          <td>
            {product.units}        
          </td>
          
          <td><button onClick={()=>reduceQty(product.units)}>-</button>{product.units}<button onClick={()=>increaseQty(product.units)}>+</button></td>
         
        </tr>   
                ))
            }
         
      
       
      </tbody>
    </Table>
                    </>
               
        </div>
    )
}

export default Cart;