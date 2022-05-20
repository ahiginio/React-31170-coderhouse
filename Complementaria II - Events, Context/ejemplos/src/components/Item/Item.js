import {Link, useNavigate} from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
export default function Item({ item }) {
  const navigate = useNavigate()
  return (
      <Card style={{ width: "18rem" }} onClick={() => navigate(`/product/${item.id}`)}>
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
  );
}
