import { useCartContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter";

export const ItemCart = ({ product }) => {
  const { removeItem, updateItem } = useCartContext();
  const { count, increment, decrement } = useCounter(
    product.quantity,
    product.stock,
    1
  );

  return (
    <div className="itemCart">
      <div className="itemCartTitle">
        <h3>{product.title}</h3>
        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "5px",
          }}
          src={`${product.img}`}
          alt={`Imagen de ${product.title}`}
        />
      </div>
      <div className="grupoAgregarCarrito">
        <div className="btnsCarrito">
          <button
            onClick={async () => {
              updateItem(product.id, count - 1);
              decrement();
            }}
          >
            -
          </button>

          <span>{count}</span>
          <button
            onClick={() => {
              updateItem(product.id, count + 1);
              increment();
            }}
          >
            +
          </button>
        </div>
        <div>
          <p>Subtotal: ${product.price * count}</p>
        </div>

        <button className="btnEliminar" onClick={() => removeItem(product.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};
