import React, {useState, useEffect, Fragment} from 'react';
import {useNavigate, useParams   } from 'react-router-dom';

import Swal from 'sweetalert2';

import clienteAxios from '../../config/axios';
import Spinner from '../layout/Spinner';

function EditarProductos(props) {

    // obtener el ID
    const { id } = useParams();

    // producto = state, y funcion para actualizar
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: '',
        imagen : ''
    });    


    
    // cuando el componente carga
    useEffect(() => { 
        
        // consultar la api para traer el producto a editar
        const consultarAPI = async () => {
            const productoConsulta = await clienteAxios.get(`/productos/${id}`);
            guardarProducto(productoConsulta.data);
        }    

        consultarAPI();
    }, [])

    return ( 
        <Fragment>
            <h2>EditarProductos</h2>
        </Fragment>
    )
}

export default EditarProductos;