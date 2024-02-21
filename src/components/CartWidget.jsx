import React from "react";

export const CartWidget = () => {
  return (
    <div className="carWidget">
      <img
        className="iconoCarrito"
        src="../src/assets/images/cart.svg"
        alt=""
      />
      <span className="cantidad">0</span>
    </div>
  );
};
