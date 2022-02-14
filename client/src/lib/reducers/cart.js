 const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED":
      return action.payload.cartItems;
    case "ADD_TO_CART":
      let itemInCart = state.find(cartItem => cartItem._id === action.payload.item._id);
      if (itemInCart) {
        return state.map(cartItem => cartItem._id === action.payload.item._id ? action.payload.item : cartItem);
      } else {
        return state.concat(action.payload.item);
      }
    case "CHECKOUT":
      return [];
    default:
      return state;
  }
};

export default cart;