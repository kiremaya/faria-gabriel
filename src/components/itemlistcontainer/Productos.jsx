import { useEffect, useState } from "react";
import "../itemlistcontainer/itemlist.css";
import { productos } from "../../data/productos.js";
import ItemList from "./Itemlist.jsx";

function Productos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    fetchProductos.then((data) => {
      setItems(data);
    });
  }, []);

  return <ItemList items={items} />;
}

export default Productos;
