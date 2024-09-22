import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import logo from '../IMG/Logo_INTA.png';
import '../style/style.body.css';
import { Link } from 'react-router-dom';


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
                <Link to={'/inicio'} style={{textDecoration:'none', color:'black'}}>
                Inicio
                </Link>
              </li>
            <li className="nav-item">
            <Link to={'/nosotros'} style={{textDecoration:'none', color:'black'}}>
                Nosotros
                </Link>
            </li>
            <NavDropdownMenu title="Redes de información" className="nav-item dropdown" id="myDropdown">
                  {/* <!-- Sub menú Agricultura --> */}
                  <DropdownSubmenu title='Agricultura'>
                      <NavDropdown.Item><Link>
                      <a className="dropdown-item" href="#">Suelos</a></Link></NavDropdown.Item>
                      <NavDropdown.Item href='coberturas'>
                        <Link><a className="dropdown-item" >Coberturas</a></Link>
                      </NavDropdown.Item>
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
                      <NavDropdown.Item href='mapapluv'><Link to={'/mapapluv'} style={{textDecoration:'none', color:'black'}}>
                Pluviómetros
                </Link></NavDropdown.Item>
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
              <Link to={'/publicaciones'} style={{textDecoration:'none', color:'black'}} >
              Publicaciones
              </Link>
            </li>
            <li className="nav-item">
            <Link to={'/contacto'} style={{textDecoration:'none', color:'black'}} >
              Contacto
              </Link>
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