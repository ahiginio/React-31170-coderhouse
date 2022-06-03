import ItemList from "../ItemList/ItemList";
import {Container, Row, Col, Spinner, InputGroup} from "react-bootstrap"
import React from "react";
import { getFirestore, getDoc, getDocs, collection, doc, query, where} from "firebase/firestore"

export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    const db = getFirestore()
    if (categoryId) {
      // 3. Traigo una colleccion pero con filtros
      const q = query(
        collection(db, "productos"),
        where("category_id", "==", categoryId)
      );
      getDocs(q).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      // 2. Traigo una coleccion
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  },[categoryId])

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