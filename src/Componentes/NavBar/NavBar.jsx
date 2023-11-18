import React from 'react'
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link className="btn btn-outline-dark mx-2" to='/' replace={true}>TiendaProducts</Link>
                </li>
                <li class="nav-item">
                <Link className="btn btn-outline-info mx-3"  to='/ListaProductos' replace={true}>Lista de Productos</Link>
                </li>
                <li class="nav-item">
                <Link className="btn btn-outline-info mx-2" to='/BuscarProducto' replace={true}>Buscar Productos</Link>
                </li>
            </ul>
        </div>
</nav>
    </div>
  )
}

export default NavBar
