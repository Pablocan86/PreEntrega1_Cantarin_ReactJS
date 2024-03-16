import { useCounter } from "../hooks/useCounter";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "../styles/App.css";
import { toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const { count, increment, decrement, reset } = useCounter(1, item.stock, 1);
  const handleAddToCart = () => {
    addItem(item, count);
    toast.success(`Producto agregado correctamente`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="div_item_detail">
      <div className="title_item_detail">
        <h2 className="title_item_detail">{item.title}</h2>
        <Link to="/">
          <button className="boton_cerrar" style={{ marginLeft: "350px" }}>
            X
          </button>
        </Link>
      </div>
      <div className="img_and_details">
        <img
          className="img_item_details"
          src={`${item.img}`}
          alt={`Imagen de ${item.title}`}
        />
        <div className="details">
          <p>Tamaño: {item.size}</p>
          <p>Descripción: {item.description}</p>
          <p>Stock: {item.stock}</p>
          <p>Precio: $ {item.price}</p>
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
        </div>
      </div>
    </div>
  );
};
