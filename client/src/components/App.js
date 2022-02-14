import React, { useEffect, useState } from "react";
import ShopHeader from "./ShopHeader";
import ProductTable from "./ProductTable";
import productService from "../services/productService";
import cartService from "../services/cartService";

const App = () => {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     let data = await productService.getProducts();
  //     setProducts(data);
  //   };

  //   const getCartItems = async () => {
  //     let data = await cartService.getCart();
  //     setCart(data);
  //   }

  //   getAllProducts();
  //   getCartItems();
  // }, []);

  return (
    <div id="app">
      <ShopHeader />
      <ProductTable />
    </div>
  );
};

export default App;

/* 
ShopHeader
  Cart
    Cart Item
    Total Component
    Button Checkout
ProductTable
  Products
    Product
      button (Add to Cart)
      button (edit)
  Button (add a product)
*/
