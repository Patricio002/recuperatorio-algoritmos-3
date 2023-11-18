import { useState,useEffect } from 'react'
import NavBar from '../../Componentes/NavBar/NavBar'
import CardProducto from '../../Componentes/CardProducto/CardProducto'
import { listarProductos,eliminarProducto } from '../../Servicios/Productos'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import BuscarProducto from '../../Componentes/BuscarProducto/BuscarProducto'


const ListaProductos = () => {

    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const obtenerDatos = async () => { // Creo funcion dentro del useEffect
            const produc = await listarProductos();
            setProductos(produc);
        }
        obtenerDatos(); //llamando al metodo creado arriba
    },[])

  return (
    <div>
        { productos.map(p => ( // Mapeo o recorro la lista de productos
        <CardProducto producto={p} key={p.id} /> // Al card le paso como propiedad(producto) ,un objeto con todos sus atributos
        ))} 
           
    </div>
  )
}

export default ListaProductos
