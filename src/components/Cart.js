import React,{useEffect,useContext,useState} from 'react';
import {CartContext} from './CartContext';
import "./Cart.css"
import { Table } from 'reactstrap';
import {Trash2} from 'react-feather';

function Cart(){
    const [cart,setCart] = useContext(CartContext);
    const [cartTotal,setCartTotal] = useState(0)
    function removeFromCart(productToRemove){
        setCart(cart.filter(product=>product!==productToRemove))
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