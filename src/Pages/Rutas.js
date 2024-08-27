import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { keyframes } from 'styled-components';
import logo from '../IMG/Logo_INTA.png'

// import Layout from '../components/Layout';
// import Nosotros from './Nosotros'
// import Inicio from './Inicio'
// import Novedades from './novedades'
// import Contacto from './Contacto'
// import MapaPluv from './Mapa'
// import Coberturas from './coberturas';
const Layout = lazy(() => import('../components/Layout'));
const Nosotros = lazy(() => import('./Nosotros'));
const Inicio = lazy(() => import('./Inicio'));
const Novedades = lazy(() => import('./novedades'));
const Contacto = lazy(() => import('./Contacto'));
const MapaPluv = lazy(() => import('./Mapa'));
const Coberturas = lazy(() => import('./coberturas'));


function NavbarDarkExample() {
  
  return (
        <Suspense fallback={<div style={{width:'100%', height:'100vh', backgroundColor:'rgba(0,0,0,.9)', position:'fixed', display:'flex', margin:'auto',alignItems:'center',justifyContent:'center'}}>
          <div><img style={{marginLeft: 'auto', marginRight: 'auto',display: 'block'}} src={logo} width={100}></img>
          <h1 style={{fontFamily:'serif', color:'lightgray', fontSize:'24px'}}><br/>Cargando...Aguarde por favor....</h1></div>
        </div>}>
            <Routes>
              <Route path="/"  element={<Layout />}>
                  <Route path='/'  element={<Inicio />} />
                  <Route path='/inicio'  element={<Inicio />} />
                  <Route path='/nosotros'  element={<Nosotros />} />
                  <Route path='/coberturas'  element={<Coberturas />} />
                  <Route path='/novedades'  element={<Novedades />} />
                  <Route path='/contacto'  element={<Contacto />} />
                  <Route path='/mapapluv'  element={<MapaPluv />} />
              </Route>
            </Routes>
          </Suspense>
  );
}

export default NavbarDarkExample;