import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import {CreateButtonStyled} from "../styles2.js"




const ProductModal = () => {
  const [isOpen, setIsOpen] = useState(true);
const closeModal = () => setIsOpen(false);

const openModal = () => setIsOpen(true)

  
const [product, setProduct] = useState({
  name: "",
  price: 0,
  description: "",
  image: "",
});

const handleChange = (event) => {
  setProduct({ ...product, [event.target.name]
    : event.target.value });
};
const handleSubmit = (event) => {event.preventDefault();
  console.log(product);
};
  return  (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
     // style={}
      contentLabel="Product Modal"
    >
      <h3>New Product</h3>

      <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <div className="col-6">
      <label>Name</label>
      <input type="text" className="form-control" onChange={handleChange} />
    </div>
    <div className="col-6">
      <label>Price</label>
      <input type="number" min="1"  className="form-control" />
    </div>
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" className="form-control" />
  </div>
  <div className="form-group">
    <label>Image</label>
    <input type="text" className="form-control" />
  </div>
  <CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>

</form>
      

      
    </Modal>
  );;
};

export default ProductModal;