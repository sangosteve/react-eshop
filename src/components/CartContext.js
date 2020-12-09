import {createContext,useState} from "react";
export const CartContext = createContext();

export const CartProvider = props=>{
    const [product_cart,setProductCart] = useState([]);

    return (
        <CartContext.Provider value={[product_cart,setProductCart]}>
            {props.children}
        </CartContext.Provider>
        );
}