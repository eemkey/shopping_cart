const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.newProduct)
    }
    case "EDIT_PRODUCT":
    case "ADD_TO_CART": {
      let prodToEdit = action.payload.product;
      return state.map(prod => prod._id === prodToEdit._id ? prodToEdit : prod)
    }
    case "DELETE_PRODUCT": {
      let prodToDelete = action.payload.product;
      return state.filter(prod => prod._id !== prodToDelete._id)
    }
    default:
      return state;
  }
};

export default products;
