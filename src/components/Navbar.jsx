import "../styles/App.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { LuBedSingle, LuBedDouble } from "react-icons/lu";
import { GiPillow } from "react-icons/gi";
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
          <Categories categoria={<IoHomeOutline />} />
        </Link>
        <Link to={"/category/una-plaza"}>
          <Categories categoria={<LuBedSingle />} />
        </Link>
        <Link to={"/category/dos-plazas"}>
          <Categories categoria={<LuBedDouble />} />
        </Link>
        <Link to={"/category/chicos"}>
          <Categories categoria={<MdChildCare />} />
        </Link>
        <Link to={"/category/almohadas"}>
          <Categories categoria={<GiPillow />} />
        </Link>
      </nav>
      <div>
        <CartWidget />
      </div>
    </header>
  );
};
