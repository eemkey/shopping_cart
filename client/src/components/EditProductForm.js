import React, {useState} from "react";
import Button from "./Button";

const EditProductForm = ({ onSubmit, cancelClick, title, price, quantity }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);


  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProduct = {
      title: newTitle,
      quantity: newQuantity,
      price: newPrice,
    };
    onSubmit(updatedProduct);
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
