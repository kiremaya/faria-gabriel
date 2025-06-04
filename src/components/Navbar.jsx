import "../components/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to={"/"} className="navbar-item">
          Inicio
        </Link>
        <Link to={"/productos"} className="navbar-item">
          Productos
        </Link>
       
        <Link to={"/Nosotros"} className="navbar-item">
          Nosotros
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
