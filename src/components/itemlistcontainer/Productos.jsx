import { useEffect, useState } from "react";
import "../itemlistcontainer/itemlist.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./Itemlist.jsx";

function Productos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((snapshot) => {
      const productosDB = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(productosDB);
    });
  }, []);

  return <ItemList items={items} />;
}

export default Productos;
