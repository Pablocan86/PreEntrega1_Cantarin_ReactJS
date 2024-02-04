import React from "react";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {
  return (
    <div className="div_item">
      <h2 className="title_item">{product.title}</h2>
      <img
        className="img_item"
        src={product.img}
        alt={`Imagen de ${product.title}`}
      />
      <h3 className="mark_item">{product.mark}</h3>
      <p className="description_item">{product.description}</p>
      <p className="stock_item">Stock: {product.stock}</p>
      <div className="div_button_item">
        <span className="price_item">$ {product.price}</span>
        <ItemCount />
      </div>
    </div>
  );
};
