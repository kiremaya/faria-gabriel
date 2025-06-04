import React, { useState } from "react";
import "./itemlist.css";
import Producto from "./Producto.jsx";

const categories = {
  anime: "anime",
  general: "general",
};

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter((item) => item.caracteristicas.includes(selectedCategory))
    : items;

  if (!items.length) return <p>Cargando productos...</p>;

  return (
    <>
      <div className="products-buttons">
        <button onClick={() => setSelectedCategory(categories.anime)}>
          tu anime favorito
        </button>
        <button onClick={() => setSelectedCategory(categories.general)}>
          cartas de todo tipo
        </button>
        <button onClick={() => setSelectedCategory("")}>Ver todos</button>
      </div>
      <div className="cards-container">
        {filteredItems.map((item) => (
          <Producto
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
          />
        ))}
      </div>
    </>
  );
}

export default ItemList;
