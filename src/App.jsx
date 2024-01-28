import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./styles/App.css";
const App = () => {
  return (
    <>
      <header className="headerPage">
        <div>
          <img
            className="imagenLogo"
            src="../src/assets/images/logo.jpg"
            alt="logo marca"
          />
          <h1>MUNDO MINIATURA</h1>
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
