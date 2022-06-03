import React from "react"
import {Container, Row, Col, Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/CartContext";
export default function ItemDetail ({item}) {
  // Definimos variables del context
  const { addToCart, isInCart } = React.useContext(CartContext);
  // Separamos el estado del count
  const [count, setCount] = React.useState(1)


  
  return (
    <Card className="item-detail">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        {!isInCart(item.id) ? (
          <AddButton
          onSubmit={() => addToCart(item, count)}
          count={count}
          setCount={setCount}
          stock={item.stock}
        />
          ) : (
            <button>Ir al carrito</button>
        )}
       
        
      </Card.Body>
    </Card>
  );
}