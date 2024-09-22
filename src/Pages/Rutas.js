import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Loading from '../components/Loading';
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
const Publicaciones = lazy(() => import('./publicaciones'));
const Contacto = lazy(() => import('./Contacto'));
const MapaPluv = lazy(() => import('./Mapa'));
const Coberturas = lazy(() => import('./coberturas'));


function NavbarDarkExample() {
  
  return (
    <Suspense fallback={ <Loading />}>
            <Routes>
              <Route path="/"  element={<Layout />}>
                  <Route path='/'  element={<Inicio />} />
                  <Route path='/inicio'  element={<Inicio />} />
                  <Route path='/nosotros'  element={<Nosotros />} />
                  <Route path='/coberturas'  element={<Coberturas />} />
                  <Route path='/publicaciones'  element={<Publicaciones />} />
                  <Route path='/contacto'  element={<Contacto />} />
                  <Route path='/mapapluv'  element={<MapaPluv />} />
              </Route>
            </Routes>
    </Suspense>
  );
}

export default NavbarDarkExample;