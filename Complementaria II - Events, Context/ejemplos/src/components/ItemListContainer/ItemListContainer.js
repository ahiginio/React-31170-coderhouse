import ItemList from "../ItemList/ItemList";
import {Container, Row, Col, Spinner} from "react-bootstrap"
import React from "react";
import { products } from "../../data/productos";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if(categoryId){ 
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setItems(products);
    }
  },[categoryId, isLoading])
  return (
    <Container className={"itemlist-container"}>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <ItemList items={items} />
        )}
      </Row>
    </Container>
  );
}