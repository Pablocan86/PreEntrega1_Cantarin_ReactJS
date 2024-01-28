import "../styles/App.css";
import { CarWidget } from "./CarWidget";
import { Category } from "./Category";

export const Navbar = () => {
  return (
    <>
      <div className="divNavbar">
        <Category categoria="Inicio" />
        <Category categoria="Productos" />
        <Category categoria="Nosotros" />
        <Category categoria="Contacto" />
      </div>
      <div>
        <CarWidget />
      </div>
    </>
  );
};
