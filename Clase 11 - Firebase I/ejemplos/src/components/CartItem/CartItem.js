import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

export default function CartItem ({item}) {
  // Definimos variables del context
  const { cart } = React.useContext(CartContext)
  return (
    <Card className="item-cart">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        
      </Card.Body>
    </Card>
  )
}