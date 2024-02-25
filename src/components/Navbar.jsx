import "../styles/App.css";
import { CartWidget } from "./CartWidget";
import { Categories } from "./Categories";
import { Link } from "react-router-dom";
import { GiBed } from "react-icons/gi";
export const Navbar = () => {
  return (
    <header className="headerPage">
      <div className="logo">
        <Link to={"/"}>
          <GiBed className="imagenLogo" />
        </Link>
        <h1>LA COLCHONERIA MORÓN</h1>
      </div>
      <nav className="divNavbar">
        <Link to={"/"}>
          <Categories categoria="Inicio" />
        </Link>
        <Link to={"/category/una-plaza"}>
          <Categories categoria="Una plaza" />
        </Link>
        <Link to={"/category/dos-plazas"}>
          <Categories categoria="Dos plazas" />
        </Link>
        <Link to={"/category/chicos"}>
          <Categories categoria="Niños" />
        </Link>
        <Link to={"/category/accesorios"}>
          <Categories categoria="Accesorios" />
        </Link>
      </nav>
      <div>
        <CartWidget />
      </div>
    </header>
  );
};
