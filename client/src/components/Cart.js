import { useContext, useEffect } from "react";
import { CartContext, getCart, checkout } from "../context/cart-context";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  useEffect(() => {
    getCart(dispatch);
  }, [dispatch]);

  const handleCheckout = (e) => {
    e.preventDefault();
    checkout(dispatch);
  };

  const cartTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => (sum += item.quantity * item.price));
    return sum.toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item._id}>
                <CartItem cItem={item} />
              </tr>
            );
          })}

          <tr>
            <td colSpan="3" className="total">
              {`Total: $${cartTotal()}`}
            </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleCheckout} name="button checkout" text="Checkout" />
    </div>
  );
};

export default Cart;
