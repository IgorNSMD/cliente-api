import React from 'react';

function NuevoCliente(){ 
    console.log('nuevo cliente...')
    return (
        <h2>Nuevo Cliente</h2>
    )
}

// HOC, es una función que toma un componente y retorna un nuevo componente
export default NuevoCliente;