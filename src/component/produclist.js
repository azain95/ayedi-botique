import react from "react";
import products from "../products"
import productitem from "./productitem"


const productlist = () => {

    const productlist = products.map((product) => 
<productsitem product={product} key={product.id}/>


    )
    return productlist
}

    export default productlist