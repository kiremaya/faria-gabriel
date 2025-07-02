import { useEffect, useState } from "react";
import Itemlist from "../itemlistcontainer/Itemlist.jsx";
import "../itemlistcontainer/itemlist.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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

  return (
    <div className="cards-container">
      <Itemlist items={items} />
    </div>
  );
}

export default Productos;
