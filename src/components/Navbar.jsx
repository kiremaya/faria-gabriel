import "../components/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to={"/nosotros"} className="navbar-item">
          Nosotros
        </Link>
        <Link to={"/productos"} className="navbar-item">
          Productos
        </Link>
        {/* TODO: Navigate to contact */}
        <Link to={"/"} className="navbar-item">
          Contacto
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
