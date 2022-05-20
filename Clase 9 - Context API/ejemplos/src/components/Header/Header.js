import CartWidget from "../CartWidget/CartWidget";
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"
export default function Header () {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" >Clase 7 - Routing</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/">
                  Inicio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/products">
                  Productos
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/category/1">
                  Categoria 1
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/category/2">
                  Categoria 2
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}