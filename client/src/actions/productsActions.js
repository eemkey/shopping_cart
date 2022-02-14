export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
};

export const addProduct = (newProduct) => {
  return { type: "ADD_PRODUCT", payload: { newProduct } };
};

export const editProduct = (product) => {
  return { type: "EDIT_PRODUCT", payload: { product } };
};

export const deleteProduct = (product) => {
  return { type: "DELETE_PRODUCT", payload: { product } };
};