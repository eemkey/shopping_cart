import React, { useState, useContext } from "react";
import Button from "./Button";
import EditProductForm from "./EditProductForm";
import { ProductContext, editProduct, deleteProduct, decreaseInventory } from "../context/product-context";
import { CartContext, addToCart } from "../context/cart-context";

const Product = ({ product }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { dispatch: productsDispatch } = useContext(ProductContext);
  const { dispatch: cartDispatch } = useContext(CartContext);

  const handleToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle();
  };

  const handleSubmit = async (updatedObject) => {
    editProduct(productsDispatch, product._id, updatedObject, handleToggle)
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    if (window.confirm(`By pressing OK "${product.title}" will be deleted`)) {
      deleteProduct(productsDispatch, product._id);
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(cartDispatch, product._id);
    decreaseInventory(productsDispatch, product._id);
  }

  const addButtonState = () => {
    let state = "button add-to-cart"
    if (product.quantity === 0) {
      state += " disabled"
    }
    return state  
  }

  const quantityClass = () => {
    let classState = "quantity"
    if (product.quantity === 0) {
      classState += " none-left"
    }
    return classState
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{`$ ${product.price}`}</p>
        <p className={quantityClass()}>{product.quantity} left in stock</p>
        <div className="actions product-actions">
          {isEdit ? (
            <EditProductForm
              onSubmit={handleSubmit}
              cancelClick={handleClick}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ) : (
            <>
              <Button onClick={handleAddToCart} name={addButtonState()} text="Add to Cart" />
              <Button onClick={handleClick} name="button edit" text="Edit" />
            </>
          )}
        </div>
        <Button onClick={handleDelete} name="delete-button" text="X" />
      </div>
    </div>
  );
};

export default Product;
