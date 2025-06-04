import {productos} from "../../data/productos.js"
import { useParams } from "react-router-dom"
import Producto from "./Producto.jsx";


function Detalles() {
    const { id } = useParams();

    const producto = productos.find(producto => producto.id === parseInt(id));
    if (!producto) {
        return <h2>Producto no encontrado </h2>;
    }
    return (
        <div>
            <h2>Detalles del producto</h2>
            producto: {producto.nombre} <br />
            precio: {producto.precio} <br />
            descripcion: {producto.descripcion} <br />
            </div> 

    )
    }
    export default Detalles;