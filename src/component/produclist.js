import react from "react";
import products from "../products"
import Productitem from "./Productitem"


const Productlist = () => {

    const productlist = products.map((product) => 
<Productitem product={product} key={product.id}/>


    )
    return productlist
}

    export default Productlist