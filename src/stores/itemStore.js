import products from "../products"
import { makeObservable, observable, action } from "mobx";

class ProductStore {
products = products; 

constructor() {
    makeObservable(this,
    {products: observable })
  //  createProduct: action ; 

  fetchItems = () => {
    console.log("Let's fetch some stuff");
  };


//createProduct = (newproduct) => {




//}

}
}


fetchItems

const productStore = new ProductStore();
export default productStore;