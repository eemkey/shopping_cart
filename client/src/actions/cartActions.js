export const cartItemsReceived = (cartItems) => {
  return {
    type: "CART_ITEMS_RECEIVED",
    payload: { cartItems },
  };
};

export const addItemToCart = ({ product, item }) => {
  return {
    type: "ADD_TO_CART",
    payload: { product, item }
  }
}

export const checkout = () => {
  return {
    type: "CHECKOUT"
  }
}