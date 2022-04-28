import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNav";
//Un componente padre puede contener tanto funciones
//como componentes hijos o de presentacion
export default function Header ({category1,category2,category3}) {
  //Funciones
  const handleClick = () => {
    alert("Este boton fue clickeado")
  }
  //Componentes de presentacion
  const Button = ({texto}) => {
    console.log(texto)
    return (
      <input type="button" value={texto} onClick={handleClick}/>
    )
  }
  return (
    <>
    {/* -------------------- Codigo o maqueta del componente ------------------- */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">{category1}</Nav.Link>
              <Nav.Link href="#link">{category2}</Nav.Link>
              <Nav.Link href="#link">{category3}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ---------------------------- Componentes hijos --------------------------- */}
      <BottomNav />
      <Button texto="CLICKEAME"  />
      <Button texto="CLICKEAME2" />
      <Button texto="CLICKEAME3" />
      <Button texto="CLICKEAME4" />
      <Button texto="CLICKEAME5" />
    </>
  );
}

