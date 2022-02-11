import cartService from "../services/cartService"

export const cartItemsReceivedSuccess = (cartItems) => {
  return {
    type: "CART_ITEMS_RECEIVED",
    payload: { cartItems },
  };
};

export const cartItemsReceived = () => {
  return (dispatch) => {
    cartService.getCart((cartItems) => {
      dispatch(cartItemsReceivedSuccess(cartItems));
    });
  }
}

export const addItemToCartSuccess = ({ product, item }) => {
  return {
    type: "ADD_TO_CART",
    payload: { product, item }
  }
}

export const addItemToCart = (id) => {
  return (dispatch) => {
    cartService.addToCart(id, ({ product, item }) => {
      dispatch(addItemToCartSuccess({ product, item }))
    });
  }
}

export const checkoutSuccess = () => {
  return {
    type: "CHECKOUT"
  }
}

export const checkout = () => {
  return (dispatch) => {
    cartService.checkout(() => {
      dispatch(checkoutSuccess())
    });
  }
}