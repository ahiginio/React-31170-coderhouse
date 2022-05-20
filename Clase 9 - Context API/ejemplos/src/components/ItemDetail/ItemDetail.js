import {Container, Row, Col, Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
import { useContext } from "react";
import { contexto } from "../CustomProvider/CustomProvider";

export default function ItemDetail ({item}) {

  const {setCarrito} = useContext(contexto)

  //setCarrito(item,count)

  //1- Habiendo recibido el count desde el AddButton, se debe guardar en algun lugar (mario dijo : un state)
  //2-  Habiendo cambiado ese estado muestro un nuevo boton en pantalla en el itemDetail
  //3- Cuando ese boton se clickee, se manda a guardar el detalle del producto y su cantidad al contexto
  const handleClick = () => {
    //setCarrito(item,count)
    setCarrito(["test"])
  }

  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        <AddButton onEvent={(count)=>{console.log({ContadorRecibidoEnElPadre:count})}}/>
        <button onClick={handleClick}>El nuevo boton del desafio</button>
      </Card.Body>
    </Card>
     
  );
}