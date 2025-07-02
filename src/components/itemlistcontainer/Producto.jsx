import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext";

function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    if (!id) {
      setProducto(null);
      setLoading(false);
      return;
    }
    const db = getFirestore();
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() });
      } else {
        setProducto(null);
      }
      setLoading(false);
    });
  }, [id]);

  if (!id) return <p>Producto no válido.</p>;
  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  const enCarrito = cart.find((item) => item.id === producto.id);
  const cantidad = enCarrito ? enCarrito.cantidad : 0;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => addToCart(producto)} disabled={cantidad >= 5}>
        {cantidad >= 5 ? "Máximo en carrito" : "Comprar"}
      </button>
      {cantidad > 0 && <p>En carrito: {cantidad}</p>}
    </div>
  );
}

export default Producto;