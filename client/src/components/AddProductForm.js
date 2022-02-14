import { useState, useContext } from "react";
import Button from "./Button";
import { addProduct, ProductContext } from "../context/product-context";

const AddProductForm = ({ handleClick }) => {
  // const AddProductForm = ({ products, setProducts, handleClick }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const { dispatch } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct(dispatch, { title, price, quantity }, resetInputs);
    handleClick(e);
  };

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          name="product-price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          name="product-quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="actions form-actions">
        <Button
          onClick={handleSubmit}
          name="button"
          text="Add"
          testId="submit"
        />
        <Button onClick={handleClick} name="button" text="Cancel" />
      </div>
    </form>
  );
};

export default AddProductForm;
