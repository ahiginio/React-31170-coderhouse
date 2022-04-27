import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
export default function Header () {
  return (
    <div className="header">
      <div className="logo">
        LOGO
      </div>
      <nav className="menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Quienes Somos</li>
        <li>Contacto</li>
      </nav>
    </div>
  );
}


