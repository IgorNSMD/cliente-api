import React, { Fragment, useContext }  from 'react';

// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*** Layout */
import Header from './componentes/layout/Header';
import Navegacion from './componentes/layout/Navegacion';

/** Componentes */
import Clientes from './componentes/clientes/Clientes';
import NuevoCliente from './componentes/clientes/NuevoCliente';
import EditarCliente from './componentes/clientes/EditarCliente';


import Productos from './componentes/productos/Productos';
import EditarProducto from './componentes/productos/EditarProducto';
import NuevoProducto from './componentes/productos/NuevoProducto';


import Pedidos from './componentes/pedidos/Pedidos';
import NuevoPedido from './componentes/pedidos/NuevoPedido';

import Login from './componentes/auth/Login';

import { CRMContext, CRMProvider } from './context/CRMContext';

function App() {

  // utilizar context en el componente
  const [ auth, guardarAuth ] = useContext(CRMContext);

  return (
    <Router>
      <Fragment>
        <CRMProvider value={[ auth, guardarAuth ]}>
          <Header/>
          <div className="grid contenedor contenido-principal">
            <Navegacion/>

            <main className="caja-contenido col-9">  
              <Routes>
                  <Route exact path='/' Component={Clientes} />
                  <Route exact path='/clientes/nuevo' Component={NuevoCliente} />
                  <Route exact path="/clientes/editar/:id" Component={EditarCliente} />

                  <Route exact path='/Productos' Component={Productos} />
                  <Route exact path="/productos/nuevo" Component={NuevoProducto} />
                  <Route exact path="/productos/editar/:id" Component={EditarProducto} />

                  <Route exact path='/Pedidos' Component={Pedidos} />
                  <Route exact path="/pedidos/nuevo/:id" Component={NuevoPedido} />

                  <Route exact path="/iniciar-sesion" Component={Login} />
                                  
              </Routes>
            </main>

          </div>
        </CRMProvider>


      </Fragment>
    </Router>


  );
}

export default App;
