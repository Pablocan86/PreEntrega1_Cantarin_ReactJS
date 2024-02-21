import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const { pid } = useParams();
  useEffect(() => {
    fetch("../data/productos.json")
      .then((response) => response.json())
      .then((productos) => {
        const prod = productos.find((producto) => producto.id == pid);
        if (prod) setItem(prod);
      });
  });
  return (
    <div className="item_details_container">
      <ItemDetail item={item} />
    </div>
  );
};
