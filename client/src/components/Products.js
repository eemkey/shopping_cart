import { useContext, useEffect } from "react";
import { ProductContext, getProducts } from "../context/product-context";
import Product from "./Product";

const Products = () => {
  const { products, dispatch: productsDispatch } = useContext(ProductContext);

  useEffect(() => {
    getProducts(productsDispatch);
  }, [productsDispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
