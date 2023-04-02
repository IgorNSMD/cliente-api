import React, {useState, useEffect, Fragment}  from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import Swal from 'sweetalert2';

import clienteAxios from '../../config/axios';

import FormBuscarProducto from './FormBuscarProducto';

function NuevoPedido() { 
    // extraer ID de cliente
    const { id } = useParams();

    // state
    const [cliente, guardarCliente] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    
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
            console.log(resultadoBusqueda)   
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
                <li>
                    <div className="texto-producto">
                        <p className="nombre">Macbook Pro</p>
                        <p className="precio">$250</p>
                    </div>
                    <div className="acciones">
                        <div className="contenedor-cantidad">
                            <i className="fas fa-minus"></i>
                            <input type="text" name="cantidad" />
                            <i className="fas fa-plus"></i>
                        </div>
                        <button type="button" className="btn btn-rojo">
                            <i className="fas fa-minus-circle"></i>
                                Eliminar Producto
                        </button>
                    </div>
                </li>
                <li>
                    <div className="texto-producto">
                        <p className="nombre">Macbook Pro</p>
                        <p className="precio">$250</p>
                    </div>
                    <div className="acciones">
                        <div className="contenedor-cantidad">
                            <i className="fas fa-minus"></i>
                            <input type="text" name="cantidad" />
                            <i className="fas fa-plus"></i>
                        </div>
                        <button type="button" className="btn btn-rojo">
                            <i className="fas fa-minus-circle"></i>
                                Eliminar Producto
                        </button>
                    </div>
                </li>
                <li>
                    <div className="texto-producto">
                        <p className="nombre">Macbook Pro</p>
                        <p className="precio">$250</p>
                    </div>
                    <div className="acciones">
                        <div className="contenedor-cantidad">
                            <i className="fas fa-minus"></i>
                            <input type="text" name="cantidad" />
                            <i className="fas fa-plus"></i>
                        </div>
                        <button type="button" className="btn btn-rojo">
                            <i className="fas fa-minus-circle"></i>
                                Eliminar Producto
                        </button>
                    </div>
                </li>
            </ul>  

            <div className="enviar">
                <input type="submit" className="btn btn-azul" value="Agregar Pedido" />
            </div> 

        </Fragment>

    )
}

export default NuevoPedido;