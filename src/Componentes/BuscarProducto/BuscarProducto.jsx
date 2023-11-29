import React, { useEffect, useState } from 'react'
import { listarCategoria, listarProductoXCategoria } from '../../Servicios/Productos';
import CardProducto from '../CardProducto/CardProducto';
const BuscarProducto = () => {

    const [categorias, setCategorias] = useState([]);
    const [productosXcat, setProductosXcat] = useState([]);
    const [selectCategoria, setSelectCategoria] = useState(null);

    const listarCat = async () => {
        const cat = await listarCategoria();
        setCategorias(cat);

    }

    useEffect(() => {
        listarCat();
    }, [])

    const listarProducXcat = async () => {
        const produc = await listarProductoXCategoria(selectCategoria?.nombre);
        console.log("Productos obtenidos:", produc);

        setProductosXcat(produc);

    }

    useEffect(() => {
        listarProducXcat();
    }, [selectCategoria])



    return (
        <div>
            <div className='card'>
                <div className='card-header mx-auto'>
                    <div className="form-group ">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <div className="dropdown-menu">
                                {categorias.map((c) => (
                                    <button key={c} className="dropdown-item" onClick={() => setSelectCategoria({ "nombre": c })}>{c}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='card-body'>
                <ul>
                    {productosXcat.map((p) => (
                        <CardProducto producto={p} key={p.id} cambiarOp={false} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BuscarProducto
