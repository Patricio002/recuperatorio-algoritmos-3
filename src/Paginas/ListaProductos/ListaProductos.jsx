import { useState, useEffect } from 'react'
import CardProducto from '../../Componentes/CardProducto/CardProducto'
import { listarProductos, eliminarProducto } from '../../Servicios/Productos'


const ListaProductos = () => {

    const [productos, setProductos] = useState([])

    const obtenerDatos = async () => { // Creo funcion dentro del useEffect
        const produc = await listarProductos();
        setProductos(produc);
    }

    useEffect(() => {
        obtenerDatos(); //llamando al metodo creado arriba
    }, [])

    const eliminarP = async (id) => {
        const rec = await eliminarProducto(id);
        console.log(rec);
        obtenerDatos();
    }

    return (
        <div>
            {productos.map(p => ( // Mapeo o recorro la lista de productos
                <CardProducto producto={p} key={p.id} cambiarOp={true} eliminar={eliminarP} /> // Al card le paso como propiedad(producto) ,un objeto con todos sus atributos
            ))}

        </div>
    )
}

export default ListaProductos
