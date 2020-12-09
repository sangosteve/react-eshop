import { createContext,useState } from "react";

export const ProductsContext = createContext();
export const ProductsProvider = props=>{
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
            <ProductsContext.Provider value={[products,setProducts]}>
                {props.children}
            </ProductsContext.Provider>
            );
}