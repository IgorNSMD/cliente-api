import React, { useEffect, useState, Fragment }  from 'react';
import { Link } from 'react-router-dom';

// importar cliente axios
import clienteAxios from '../../config/axios';
import Cliente from './Cliente';

function Clientes(props) {

    // Trabajar con el state
    // clientes = state,  guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    const consultarAPI = async() => {
        //console.log('consultarAPI...')

        const clientesConsulta = await clienteAxios.get('/clientes');

        //console.log(clientesConsulta.data)

        // colocar el resultado en el state
        guardarClientes(clientesConsulta.data);

    }

    // use effect es similar a componentdidmount y willmount
    useEffect( () => { 
        consultarAPI()
    })

    return ( 
        <Fragment>
            <h2>Clientes</h2>

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> 
                <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>            

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente 
                        key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>

        </Fragment>
    )
}

export default Clientes;