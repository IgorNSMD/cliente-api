import React, { useEffect, Fragment }  from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';

function Clientes(props) {

    const consultarAPI = async() => {
        //console.log('consultarAPI...')

        const clientesConsulta = await clienteAxios.get('/clientes');
        console.log(clientesConsulta)
    }

    // use effect es similar a componentdidmount y willmount
    useEffect( () => { 
        consultarAPI()
    })

    return ( 
        <Fragment>
            <h2>Clientes</h2>
        </Fragment>
    )
}

export default Clientes;