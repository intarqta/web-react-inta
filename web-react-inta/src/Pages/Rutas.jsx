import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import Nosotros from './Nosotros'
import Inicio from './Inicio'
import Novedades from './novedades'
import Contacto from './Contacto'
import MapaPluv from './Mapa'
import Coberturas from './coberturas';


function NavbarDarkExample() {
  return (
        <Routes>
            <Route path="/"  element={<Layout />}>
              <Route path='/inicio'  element={<Inicio />} />
              <Route path='/nosotros'  element={<Nosotros />} />
              <Route path='/coberturas'  element={<Coberturas />} />
              <Route path='/novedades'  element={<Novedades />} />
              <Route path='/contacto'  element={<Contacto />} />
              <Route path='/mapapluv'  element={<MapaPluv />} />
            </Route>
        </Routes>

  );
}

export default NavbarDarkExample;


