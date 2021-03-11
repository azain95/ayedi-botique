import products from "../products";
import Productitem from "./Productitem";
import { useState } from "react";
import SearchBar from "../SearchBar";
import productStore from "../stores/itemStore"; 
import { BsPlusCircle } from "react-icons/bs";
import { Titale } from "../styles2";
import ProductModal from "../modals/productmodal";
import AddButton from "./buttons"
const Productlist = () => {
  const [query, setQuery] = useState("");

  const productlist = productStore.products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <Productitem product={product} key={product.id} />);
   // productStore.createProduct(product)
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {productlist}
      <Titale className="Row">{productlist}</Titale>
      <AddButton />



    </>
  );
};

export default Productlist;
