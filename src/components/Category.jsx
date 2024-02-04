import React from "react";
import "../styles/App.css";

export const Category = ({ categoria }) => {
  return (
    <div>
      <button className="botones_categorias"> {categoria}</button>
    </div>
  );
};
