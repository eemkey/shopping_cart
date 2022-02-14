import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { editProduct } from "../actions/productsActions";
import { useDispatch } from "react-redux";


const EditProductForm = ({ toggleEdit, cancelClick, product }) => {
  const [newTitle, setNewTitle] = useState(product.title);
  const [newPrice, setNewPrice] = useState(product.price);
  const [newQuantity, setNewQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedProduct = {
      title: newTitle,
      quantity: newQuantity,
      price: newPrice,
    };
    const response = await axios.put(`/api/products/${product._id}`, {...updatedProduct});
    const data = response.data
    dispatch(editProduct(data))
    toggleEdit()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
      </div>

      <div className="actions form-actions">
        <button type="submit" className="button">
          Update
        </button>
        <Button onClick={cancelClick} name="button" text="Cancel" />
      </div>
    </form>
  );
};

export default EditProductForm;
