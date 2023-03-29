import React from 'react';

function Cliente({ cliente }) {

	// extraer los valores
	const { _id, nombre, apellido, empresa, email, telefono } = cliente;


    return (
        <ul className="listado-clientes">
            <li className="cliente">
                <div className="info-cliente">
                    <p className="nombre">
                        {nombre} {apellido}
                    </p>
                    <p className="empresa">{empresa}</p>
                    <p>{email}</p>
                    <p>Tel: {telefono}</p>
                </div>
                <div className="acciones">
                    <a href="#" className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Cliente
                    </a>
                    <button type="button" className="btn btn-rojo btn-eliminar">
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
            <li className="cliente">
                <div className="info-cliente">
                    <p className="nombre">Juan Pablo De la torre Valdez</p>
                    <p className="empresa">Udemy</p>
                    <p>correo@correo.com</p>
                    <p>Tel: 209109310</p>
                </div>
                <div className="acciones">
                    <a href="#" className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Cliente
                    </a>

                    <button type="button" className="btn btn-rojo btn-eliminar">
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
            <li className="cliente">
                <div className="info-cliente">
                    <p className="nombre">Juan Pablo De la torre Valdez</p>
                    <p className="empresa">Udemy</p>
                    <p>correo@correo.com</p>
                    <p>Tel: 209109310</p>
                </div>
                <div className="acciones">
                    <a href="#" className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Cliente
                    </a>

                    <button type="button" className="btn btn-rojo btn-eliminar">
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
        </ul>        
    )
}

export default Cliente;