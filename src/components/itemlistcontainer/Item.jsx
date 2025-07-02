import { Link } from "react-router-dom";

function Item({ id, nombre, precio, descripcion }) {
    return (
      <Link to={`/productos/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <p style={{fontSize: '0.8rem', color: '#888'}}>ID: {id}</p>
        </div>
      </Link>
    )
}

export default Item;