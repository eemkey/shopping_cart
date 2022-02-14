import { useReducer, createContext } from "react";
import cartService from "../services/cartService";

const CartContext = createContext();

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload.cartItems
    }
    case "ADD_TO_CART": {
      let itemInCart = state.find(cartItem => cartItem._id === action.payload.item._id);
      if (itemInCart) {
        return state.map(cartItem => cartItem._id === action.payload.item._id ? action.payload.item : cartItem);
      } else {
        return state.concat(action.payload.item);
      }
    }
    case "CHECKOUT": {
      return []
    }
    default: {
      return state;
    }
  }
}

const getCart = async (dispatch) => {
    const cartItems = await cartService.getCart()
    dispatch({ type: "CART_ITEMS_RECEIVED", payload: {cartItems} })
};

const addToCart = async (dispatch, id) => {
  const { product, item } = await cartService.addToCart(id);
  dispatch({ type: "ADD_TO_CART", payload: { product, item }})
}

const checkout = async (dispatch) => {
  // API CALL TO THE DATABASE
  cartService.checkout();
  dispatch({ type: "CHECKOUT", payload: [] })
}


// const checkout = async () => {
//   const request = axios.post(`${baseUrl}checkout`)
//   return request.then(response => response.data)
// }

const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext, CartProvider, getCart, addToCart, checkout}