import {useState,useEffect} from 'react'
import { listarImagenes } from '../../Servicios/Productos'

const InicioTienda = () => {

    const [imagenes,setImagenes] = useState([])

    useEffect(()=>{
        const obtenerImg = async () => { // Creo funcion dentro del useEffect
            const producImg = await listarImagenes();
            setImagenes(producImg);
        }
        obtenerImg(); //llamando al metodo creado arriba
    },[])


  return (
    <div>
        <h1 align ="center">BIENVENIDO A LA TIENDA</h1>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            
            <div class="carousel-inner">
            {imagenes.map((imagen, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={imagen.image} className="d-block w-25 mx-auto " alt={`Slide ${index + 1}`} />
            </div>
            ))}
        </div>

        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
        </div>
    </div>
  )
}




export default InicioTienda
