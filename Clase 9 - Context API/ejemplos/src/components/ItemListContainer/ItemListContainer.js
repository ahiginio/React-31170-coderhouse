import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { products } from "../../data/productos";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if(categoryId){
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(products);
    }
  },[categoryId])
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        
        <ItemList items={items} />
      </Row>
     
    </Container>
  );
}