import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../firebase/firebase.js";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const { pid } = useParams();
  useEffect(() => {
    getProduct(pid)
      .then((prod) => setItem(prod))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="item_details_container">
      <ItemDetail item={item} />
    </div>
  );
};
