import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React, { useState } from "react";

function Navbar() {
  const { cart, totalItems, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const totalPrecio = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to={"/nosotros"} className="navbar-item">
          Nosotros
        </Link>
        <Link to={"/productos"} className="navbar-item">
          Productos
        </Link>
        <Link to={"/"} className="navbar-item">
          Contacto
        </Link>
      </ul>
      <div className="cart-widget" onClick={() => setShowCart(!showCart)} style={{cursor: 'pointer'}}>
        <span role="img" aria-label="carrito">🛒</span>
        <span className="cart-count">{totalItems}</span>
        {showCart && (
          <div className="cart-dropdown">
            <button className="close-cart" onClick={e => {e.stopPropagation(); setShowCart(false);}}>✖</button>
            <h4>Carrito</h4>
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <ul>
                {cart.map(item => (
                  <li key={item.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>{item.nombre} x{item.cantidad} (${item.precio * item.cantidad})</span>
                    <button className="remove-item" onClick={e => {e.stopPropagation(); removeFromCart(item.id);}}>-</button>
                  </li>
                ))}
              </ul>
            )}
            <p>Total: ${totalPrecio}</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
