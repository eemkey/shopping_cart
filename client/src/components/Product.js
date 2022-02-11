import React, {useState} from "react";
import Button from "./Button";
import EditProductForm from "./EditProductForm";
import { addItemToCart } from "../actions/cartActions"
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productsActions";

const Product = ({ product }) => {
 const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    let id = product._id
    dispatch(addItemToCart(id));
  }

  const handleToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle();
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    if (window.confirm(`By pressing OK "${product.title}" will be deleted`)) {
      dispatch(deleteProduct(product));
    }
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
              toggleEdit={handleToggle}
              cancelClick={handleClick}
              product={product}
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
