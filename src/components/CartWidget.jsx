import { LiaOpencart } from "react-icons/lia";

export const CartWidget = () => {
  return (
    <div className="carWidget">
      <LiaOpencart className="iconoCarrito" />

      <span className="cantidad">0</span>
    </div>
  );
};
