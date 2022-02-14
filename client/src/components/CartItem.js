import React from "react";

const CartItem = ({ cItem }) => {
  return (
    <>
      <td>{cItem.title}</td>
      <td>{cItem.quantity}</td>
      <td>{cItem.price.toFixed(2)}</td>
    </>
  );
};

export default CartItem;
