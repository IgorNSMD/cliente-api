import React, {useState, useEffect, Fragment}  from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import Swal from 'sweetalert2';

import clienteAxios from '../../config/axios';

import FormBuscarProducto from './FormBuscarProducto';
import FormCantidadProducto from './FormCantidadProducto';

function NuevoPedido() { 
    // extraer ID de cliente
    const { id } = useParams();

    // state
    const [cliente, guardarCliente] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    const [productos, guardarProductos] = useState([]);

    useEffect(() => {

        // obtener el cliente
        const consultarAPI = async () => {
            // consultar el cliente actual
            const resultado = await clienteAxios.get(`/clientes/${id}`);
            guardarCliente(resultado.data);
            //console.log(resultado.data)
        }

        // llamar a la api
        consultarAPI();
        

    }, []);  

    const buscarProducto = async e => {

        e.preventDefault();

        // obtener los productos de la busqueda
        const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`);

        // si no hay resultados una alerta, contrario agregarlo al state
        
        if(resultadoBusqueda.data[0]) {
               
            let productoResultado = resultadoBusqueda.data[0];
            // agregar la llave "producto" (copia de id)
            productoResultado.producto = resultadoBusqueda.data[0]._id;
            productoResultado.cantidad = 0;
            
            console.log(productoResultado)

            // ponerlo en el state
            guardarProductos([...productos, productoResultado]);

        } else {
            // no hay resultados
            Swal.fire({
                type: 'error',
                title: 'No Resultados',
                text: 'No hay resultados'
            })
        }               

     }    

    // almacenar una busqueda en el state
    const leerDatosBusqueda = e => {
        guardarBusqueda( e.target.value );
    }

    return (
        <Fragment>
           <h2> Nuevo Pedido </h2>

           <div className="ficha-cliente">
                <h3>Datos de Cliente</h3>
                <p>Nombre: {cliente.nombre} {cliente.apellido}</p>
                <p>Teléfono: {cliente.telefono}</p>
            </div>

            <FormBuscarProducto 
                        buscarProducto={buscarProducto}
                        leerDatosBusqueda={leerDatosBusqueda}
            />            

            <ul className="resumen">
                {productos.map((producto, index) => (
                            <FormCantidadProducto 
                                key={producto.producto}
                                producto={producto}
                                // restarProductos={restarProductos}
                                // aumentarProductos={aumentarProductos}
                                // eliminarProductoPedido={eliminarProductoPedido}
                                index={index}
                            />
                 ))}              
            </ul>  

            <div className="enviar">
                <input type="submit" className="btn btn-azul" value="Agregar Pedido" />
            </div> 

        </Fragment>

    )
}

export default NuevoPedido;