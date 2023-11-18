import React from 'react'
import './CardProducto.css'

//Props obtiene la propiedad de producto, y en html accedo a esa misma a mostrar sus datos.
const CardProducto = (props) => {
    
  return (
    
        <div className="card mb-3 w-50 mx-auto" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.producto.image} className="card-img-top w-75" alt="..." /> 
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p>{props.producto.title}</p>
                        <p className="card-text">{props.producto.description}</p>
                        <p>{props.producto.category}</p>
                        <p>Rating:{props.producto.rating.rate} Count:{props.producto.rating.count}</p>
                        <p>${props.producto.price}</p>
                        <span><button>Eliminar</button></span>
                    </div>
                </div>
            </div>
        </div>
  
 
 )
}

export default CardProducto
