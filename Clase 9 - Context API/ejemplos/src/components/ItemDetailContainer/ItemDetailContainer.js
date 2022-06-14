import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { products } from "../../data/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(products.find(item => item.id === productId));
  }, [productId]);
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
}