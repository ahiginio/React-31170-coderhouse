import {Card, Button} from 'react-bootstrap';
export default function Item ({product}) {
  return (
    <Card style={{ width: "18rem", border: "1px solid #ccc" }}>
      <Card.Img variant="top" src={product.image} className="img-fluid" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p>Stock: {product.stock}</p>
          <p>Price : {product.price}</p>
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}