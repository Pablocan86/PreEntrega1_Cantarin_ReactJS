import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ItemCount } from "./components/ItemCount.jsx";

import "./styles/App.css";
import { Item } from "./components/Item.jsx";

const App = () => {
  return (
    <>
      <header className="headerPage">
        <div className="logo">
          <img
            className="imagenLogo"
            src="../src/assets/images/furniture-bed.svg"
            alt="logo marca"
          />
          <h1>LA COLCHONERIA MORÓN</h1>
        </div>
        <Navbar />
      </header>

      <ItemListContainer
        className="itemListContainer"
        greeting={"Lista contenedora"}
      />
    </>
  );
};

export default App;
