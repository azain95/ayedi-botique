import products from "../products";
import Productitem from "./Productitem";
import { useState } from "react";
import SearchBar from "../SearchBar";
const Productlist = () => {
  const [query, setQuery] = useState("");

  const productlist = products
    .filter((product) => product.name.includes(query))
    .map((product) => <Productitem product={product} key={product.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {productlist}
    </>
  );
};

export default Productlist;
