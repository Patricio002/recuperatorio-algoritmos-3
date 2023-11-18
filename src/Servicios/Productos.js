import { POST,GET,DELETE } from './Httpr.js';

export const listarProductos = async () => {

    let url= '/products'
    let resp= await GET(url)

    return resp;
}
export const listarImagenes = async () => {

    let url= '/products?limit=5'
    let resp= await GET(url)

    return resp;
}

export const listarCategoria = async () => {

    let url = "/products/categories"; 
    let resp = await GET(url) 

    return resp;

}

export const listarProductoXCategoria = async (categoria) => {

    let url=`/products/category/${categoria}`;
    let resp = await GET(url);

    return resp;

}

export const eliminarProducto = async (id) => {
    let url = `/products/${id}`;
    let resp = await DELETE(url);
    return resp;
}
