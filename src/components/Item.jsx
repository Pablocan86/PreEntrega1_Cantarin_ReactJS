import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="div_item">
      <h2 className="title_item">{product.title}</h2>
      <img
        className="img_item"
        src={`${product.img}`}
        alt={`Imagen de ${product.title}`}
      />
      <h3 className="mark_item">Tamaño: {product.size}</h3>
      {/* <p className="description_item">{product.descripción}</p> */}
      {/* <p className="stock_item">Stock: {product.stock}</p> */}
      <div className="div_button_item">
        <span className="price_item">$ {product.price}</span>
      </div>
      <Link to={`/product/${product.id}`}>
        <button className="boton_ver_producto">VER PRODUCTO</button>
      </Link>
    </div>
  );
};
