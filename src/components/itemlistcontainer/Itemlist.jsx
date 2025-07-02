import React, { useState } from "react";
import "./itemlist.css";
import Item from "./Item";

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
      </div>

      {filteredItems.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          descripcion={item.descripcion}
          precio={item.precio}
        />
      ))}
    </>
  );
}

export default ItemList;
