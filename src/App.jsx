import "./styles/App.css";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx";
import { NotFound } from "./components/NotFound.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer className="itemListContainer" />}
        />
        <Route path="/category/:cid" element={<ItemListContainer />} />
        <Route path="/product/:pid" element={<ItemDetailsContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
