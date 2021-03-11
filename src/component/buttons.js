import React from "react";
import ProductModal from "../modals/productmodal";
import { makeObservable, observable, action } from "mobx";
import { BsPlusCircle } from "react-icons/bs";


import { useState } from "react";

const AddButton = () => {
  return <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal}  />
<ProductModal isOpen={isOpen} closeModal={closeModal} />
  </>;
};

export default AddButton;