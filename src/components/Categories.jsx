import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

export const Categories = ({ categoria }) => {
  return <button className="botones_categorias"> {categoria}</button>;
};
