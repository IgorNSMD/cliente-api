import React, {useState, useContext} from 'react';


// Context


function Login(props){

    // almacenar lo que el usuario escribe en el state
    const leerDatos = e => {
        // guardarCredenciales({
        //     ...credenciales,
        //     [e.target.name] : e.target.value
        // })
    }

    return (
        <div className="login">
            <h2>Iniciar Sesión</h2>

            <div className="contenedor-formulario">
                <form>
                    <div className="campo">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Email para Iniciar Sesión"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <div className="campo">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password para Iniciar Sesión"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <input type="submit" value="Iniciar Sesión" className="btn btn-verde btn-block" />                    
                </form>
            </div>
        </div>
    )
}

export default Login;
