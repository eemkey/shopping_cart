import React, { useState } from "react";
import Products from "./Products";
import Button from "./Button";
import AddProductForm from "./AddProductForm";

const ProductTable = ({ products, setProducts, cart, setCart }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <>
      <main>
        <Products cart={cart} setCart={setCart} />
        <div className={isVisible ? "add-form visible" : "add-form"}>
          <Button
            onClick={handleClick}
            name="button add-product-button"
            text="Add a Product"
          />
          <h3>Add Product</h3>
          <AddProductForm
            handleClick={handleClick}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </main>
    </>
  );
};

export default ProductTable;
