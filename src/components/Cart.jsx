import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
  const { cart, totalPrice, emptyCart } = useCartContext();
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="carritoVacio">
            <h4>Aún no hay productos en el carrito</h4>
            <Link to="/">
              <button className="boton_agregar">Volver a inicio</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="carritoVacio">
          <ItemList products={cart} plantilla="ItemCart" />
          <div className="grupoCarrito">
            <p className="resumen">Resumen de la compora: $ {totalPrice()}</p>
            <div className="grupoBtnsCarrito">
              <button className="botonCarrito" onClick={emptyCart}>
                Vaciar carrito
              </button>
              <Link to="/">
                <button className="botonCarrito">Cotinuar Comprando</button>
              </Link>
              <Link to="/checkout">
                <button className="botonCarrito">Finalizar Compra</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
