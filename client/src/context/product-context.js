import { useReducer, createContext } from "react";
import productService from "../services/productService";


const ProductContext = createContext();

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.newProduct)
    }
    case "EDIT_PRODUCT": {
      let prodToEdit = action.payload.product;
      return state.map(prod => prod._id === prodToEdit._id ? prodToEdit : prod)
    }
    case "DELETE_PRODUCT": {
      return state.filter(prod => prod._id !== action.payload.id)
    }
    case "DECREASE_INVENTORY": {
      let prodToUpdate = state.find(prod => prod._id === action.payload.id);
      prodToUpdate = {...prodToUpdate, quantity: prodToUpdate.quantity - 1}
      return state.map(prod => prod._id === prodToUpdate._id ? prodToUpdate : prod);
    }
    default:
      return state;
  }
};

const getProducts = async (dispatch) => {
  const products = await productService.getProducts();
  dispatch({type: "PRODUCTS_RECEIVED", payload: { products }})
}

const addProduct = async (dispatch, product, callback) => {
  const newProduct = await productService.addProduct(product);
  dispatch({type: "ADD_PRODUCT", payload: { newProduct }});
  if (callback) {
    callback();
  }
}

const editProduct = async (dispatch, id, updatedProduct, callback) => {
  const product = await productService.editProduct(id, updatedProduct);
  dispatch({type: "EDIT_PRODUCT", payload: { product }});
  if (callback) {
    callback();
  }
}

const deleteProduct = async (dispatch, id, callback) => {
  await productService.deleteProduct(id);
  dispatch({type: "DELETE_PRODUCT", payload: { id }})
  if (callback) {
    callback();
  }
}

const decreaseInventory = (dispatch, id) => {
  dispatch({type: "DECREASE_INVENTORY", payload : { id }})
}

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider, getProducts, addProduct, editProduct, deleteProduct, decreaseInventory };
