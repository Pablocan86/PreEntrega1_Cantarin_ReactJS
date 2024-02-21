import { useCounter } from "../hooks/useCounter.jsx";
import "../styles/App.css";
export const ItemCount = () => {
  const { count, increment, decrement, reset } = useCounter(1, 10, 1);

  const handleAddToCart = () => {
    console.log("Productos agregado al carrito");
  };

  return (
    <>
      <div className="grupo_agregar">
        <div className="botones_sumarrestar">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
        <button className="boton_agregar" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
