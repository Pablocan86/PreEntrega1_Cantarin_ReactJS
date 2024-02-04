import { useState } from "react";
import "../styles/App.css";
export const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Productos agregado al carrito");
  };

  return (
    <>
      <div className="grupo_agregar">
        <div className="botones_sumarrestar">
          <button onClick={handleDecrement}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="boton_agregar" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
