import React, { useEffect, useState } from 'react'
import { listarCategoria,listarProductoXCategoria } from '../../Servicios/Productos';
const BuscarProducto = () => {

  const [categorias,setCategorias] = useState([]);
  const [productosXcat, setProductosXcat] = useState([]);
  const [selectCategoria,setSelectCategoria] = useState(null);

  useEffect (()=>{
    const listarCat = async ()  => {
        const cat = await listarCategoria();
        setCategorias(cat);

    }
    listarCat();
  },[])

  useEffect (()=>{
    
    const listarProducXcat = async () => {
      
      const produc = await listarProductoXCategoria(selectCategoria?.nombre);
      console.log("Productos obtenidos:", produc);
      setProductosXcat(produc);
    
    }
    listarProducXcat();
  },[selectCategoria])

  

  return (
    <div>
        <div className='card'>
            <div className='card-body'>
      <form align="center">
        <div className="form-group">
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
         Category
        </button>
        <div className="dropdown-menu">
          {categorias.map((c)=>(
          <button key={c} className="dropdown-item" onClick={()=>setSelectCategoria({nombre: c})}>{c}</button>
          ))}
        </div>
      </div>
        </div>
    </form>
            <ul>
              {productosXcat.map((p)=>( 
              <li key={p.id}>{p.title} {p.price}</li>
              ))}
            </ul>

    </div>
    </div>
    </div>
  )
}

export default BuscarProducto
