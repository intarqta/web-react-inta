import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import logo from '../IMG/Logo_INTA.png';
import '../style/style.body.css';


function Inicio() {
  return (
    <div className="header-container">
      <div id="contenedor-principal">
      <Navbar id="menu-nav" expand='lg' className="bg-body-tertiary">
          <Container className="container-fluid">
            <a href="https://www.argentina.gob.ar/inta"><img width={50} src={logo} alt="" id="logo-inta" /></a>
            <Navbar.Brand className="navbar-brand" href="#" id="titulo-logo" style={{textAlign:'center'}} >Instituto Nacional de<br />Tecnología Agropecuaria</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id='nav-link-active' className="nav-link active" aria-current="page" href='/inicio'>Inicio</a>
              </li>
            <li className="nav-item">
              <a id='nav-link-active' className="nav-link active" href='nosotros'>Nosotros</a>
            </li>
            <NavDropdownMenu title="Redes de información" className="nav-item dropdown" id="myDropdown">
                  {/* <!-- Sub menú Agricultura --> */}
                  <DropdownSubmenu title='Agricultura'>
                      <NavDropdown.Item><a className="dropdown-item" href="#">Suelos</a></NavDropdown.Item>
                      <NavDropdown.Item href='coberturas'><a className="dropdown-item" >Coberturas</a></NavDropdown.Item>
                      <NavDropdown.Item><a className="dropdown-item" href="#">Ordenanzas</a></NavDropdown.Item>
                  </DropdownSubmenu>
                  {/* <!-- Sub menú Ganadería --> */}
                  <DropdownSubmenu id='dmenu' title='Ganadería'>
                      <NavDropdown.Item><a className="dropdown-item" href="#">.......</a></NavDropdown.Item>
                      <NavDropdown.Item><a className="dropdown-item" href="#">......</a></NavDropdown.Item>
                      <DropdownSubmenu><a className="dropdown-item" href="#">........ &raquo; </a>
                          <li><a className="dropdown-item" href="#">.....</a></li>
                          <li><a className="dropdown-item" href="#">.....</a></li>
                      </DropdownSubmenu>
                      <NavDropdown.Item><a className="dropdown-item" href="#">........</a></NavDropdown.Item>
                      <NavDropdown.Item><a className="dropdown-item" href="#">........</a></NavDropdown.Item>
                  </DropdownSubmenu>
                  {/* <!-- Sub menú meterorología  --> */}
                  <DropdownSubmenu title='Meteorología'>
                      <NavDropdown.Item href='mapapluv'><a className="dropdown-item">Pluviómetros</a></NavDropdown.Item>
                      <NavDropdown.Item><a className="dropdown-item" href="#">......</a></NavDropdown.Item>
                      <DropdownSubmenu><a className="dropdown-item" href="#">........ &raquo; </a>
                          <li><a className="dropdown-item" href="#">.....</a></li>
                          <li><a className="dropdown-item" href="#">.....</a></li>
                      </DropdownSubmenu>
                      <NavDropdown.Item><a className="dropdown-item" href="#">........</a></NavDropdown.Item>
                      <NavDropdown.Item><a className="dropdown-item" href="#">........</a></NavDropdown.Item>
                  </DropdownSubmenu>
              </NavDropdownMenu>
            <li className="nav-item">
              <a id='nav-link-active' className="nav-link active" href='novedades'>Novedades</a>
            </li>
            <li className="nav-item">
              <a id='nav-link-active' className="nav-link active" href='contacto'>Contacto</a>
            </li>
          </Nav>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>

  );
}

export default Inicio;