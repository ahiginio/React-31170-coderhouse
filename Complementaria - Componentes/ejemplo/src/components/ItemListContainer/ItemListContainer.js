import AddButton from "../AddButton/AddButton";
import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
export default function ItemListContainer ({title}) {
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemList />
       
      </Row>
    </Container>
  );
}