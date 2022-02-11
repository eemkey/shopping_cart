import productService from "../services/productService";

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
};

export const productsReceived = () => {
  return (dispatch) => {
    productService.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
  }
};

export const addProductSuccess = (newProduct) => {
  return { type: "ADD_PRODUCT", payload: { newProduct } };
};

export const addProduct = (newProduct, callback) => {
  return (dispatch) => {
    productService.addProduct(newProduct, (product) => {
      dispatch(addProductSuccess(product));
      if (callback) {
        callback();
      }
    });
  }
};

export const editProductSuccess = (product) => {
  return { type: "EDIT_PRODUCT", payload: { product } };
};


export const editProduct = (updatedProduct, callback) => {
  return (dispatch) => {
    productService.editProduct(updatedProduct.id, updatedProduct, (product) => {
      dispatch(editProductSuccess(product))
      if (callback) {
        callback();
      }
    });
  }
}

export const deleteProductSuccess = (product) => {
  return { type: "DELETE_PRODUCT", payload: { product } };
};

export const deleteProduct = (product, callback) => {
  return (dispatch) => {
    productService.deleteProduct(product._id, () => {
      dispatch(deleteProductSuccess(product));
      if (callback) {
        callback();
      }
    });
  }
}