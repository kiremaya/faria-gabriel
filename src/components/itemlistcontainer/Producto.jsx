import { Link } from "react-router-dom";


function Producto({ id, nombre, precio, descripcion }) {
  return (
    <Link to={`/productos/${id}`} >
      <div className="card">
        <div className="card-title">{nombre}</div>
        <div className="card-price">${precio}</div>
      </div>
    </Link>
  );
}

export default Producto;