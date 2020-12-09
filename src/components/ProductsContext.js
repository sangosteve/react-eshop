import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ProductsContext = createContext();
export const ProductsProvider = props=>{
   
      const [products, setProducts] = useState([
        { id:uuidv4(),
          name:"Black Hoodie",
          image:"./images/hoodie.png",
          category:"category",
          price:230
        },
        {
          id:uuidv4(),
          name:"Wrist Watch",
          image:"./images/men-watch.png",
          category:"category",
          price:129
        },
        {
          id:uuidv4(),
          name:"Brown Formal Shoe",
          image:"./images/shoe.png",
          category:"category",
          price:45
        },
        {
          id:uuidv4(),
          name:"Back Pack Grey",
          image:"./images/Backpack.png",
          category:"category",
          price:22
        },
        
        ]);

        return (
            <ProductsContext.Provider value={[products,setProducts]}>
                {props.children}
            </ProductsContext.Provider>
            );
}