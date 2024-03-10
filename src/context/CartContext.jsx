import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const indice = cart.findIndex((prod) => prod.id === item.id);
      const aux = [...cart];
      aux[indice].quantity = cantidad;
      setCart(aux);
    } else {
      const newItem = { ...item, quantity: cantidad };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const updateItem = (id, newQuantity) => {
    const indice = cart.findIndex((prod) => prod.id === id);
    const aux = cart;
    aux[indice].quantity = newQuantity;
    setCart([...aux]);
  };

  const getItemQuantity = () => {
    return cart.reduce((acum, prod) => (acum += prod.quantity), 0);
  };
  const totalPrice = () => {
    return cart.reduce((acum, prod) => (acum += prod.quantity * prod.price), 0);
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        emptyCart,
        updateItem,
        getItemQuantity,
        totalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
