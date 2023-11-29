import React from 'react'
import './CardProducto.css'

//Props obtiene la propiedad de producto, y en html accedo a esa misma a mostrar sus datos.
const CardProducto = (props,) => {

    const { eliminar } = props;

    const handleEliminar = async () => {

        if (typeof eliminar === 'function') {
            console.log(typeof eliminar);
            eliminar(props.producto.id);
            window.alert('Eliminado con exito');
        }
    };

    return (
        <>
            <br />
            <div className="card mb-3 w-50 mx-auto" >
                <br />
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.producto.image} className="card-img-top w-75" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p>{props.producto.id}</p>
                            <p>{props.producto.title}</p>
                            <p className="card-text">{props.producto.description}</p>
                            <p>{props.producto.category}</p>
                            <p>Rating:{props.producto.rating.rate} Count:{props.producto.rating.count}</p>
                            <p>${props.producto.price}</p>
                            {props.cambiarOp ? (<span><button onClick={handleEliminar}>Eliminar</button></span>) : <div />}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardProducto
