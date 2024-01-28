import React from "react";

export const CarWidget = () => {
  return (
    <div className="carWidget">
      <img
        className="iconoCarrito"
        src="../src/assets/images/carrito.svg"
        alt=""
      />
      <span className="cantidad">0</span>
    </div>
  );
};
