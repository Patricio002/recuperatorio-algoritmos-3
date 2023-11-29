import React from 'react'
import ListaProductos from './Paginas/ListaProductos/ListaProductos'
import Inicio from './Paginas/Inicio/Inicio'
import NavBar from './Componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BuscarProducto from './Componentes/BuscarProducto/BuscarProducto'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/ListaProductos' element={<ListaProductos />} />
                    <Route path='/BuscarProducto' element={<BuscarProducto />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
