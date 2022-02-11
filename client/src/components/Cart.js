import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "./Button";
import cartService from "../services/cartService";
import { cartItemsReceived, checkout } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleCheckout = (e) => {
    e.preventDefault();
    cartService.checkout();
    dispatch(checkout())
  }

  useEffect(() => {
    const getCartItems = async () => {
      dispatch(cartItemsReceived());
    }

    getCartItems();
  }, [dispatch]);

  const cartTotal = () => {
    let sum = 0 
    cart.forEach(item => sum += (item.quantity * item.price))
    return sum.toFixed(2)
  }

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
          
            {cart.map(item => {
              return (
                <tr key={item._id}><CartItem cItem={item} /></tr>
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
