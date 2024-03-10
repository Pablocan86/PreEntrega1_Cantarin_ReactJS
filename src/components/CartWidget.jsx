import { LiaOpencart } from "react-icons/lia";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { getItemQuantity } = useCartContext();
  return (
    <div className="carWidget">
      <Link to="/cart">
        <button className="buttonCarrito">
          <LiaOpencart className="icono_carrito" />
          <span className="cantidad">{getItemQuantity()}</span>
        </button>
      </Link>
    </div>
  );
};
