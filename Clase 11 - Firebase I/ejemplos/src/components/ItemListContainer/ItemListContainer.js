import ItemList from "../ItemList/ItemList";
import {Container, Row, Col, Spinner, InputGroup, Form} from "react-bootstrap"
import React from "react";
import { getFirestore, getDoc, getDocs, collection, doc, query, where} from "firebase/firestore"

export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
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

  const handleSearch = (event) => {
    event.preventDefault()
    if (search !== "") {
      setItems(
        items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      const db = getFirestore();
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value === ""){
      const db = getFirestore();
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }
  return (
    <Container className={"itemlist-container"}>
      <Row>
        <Col>
          <h1>{title}</h1>
          <Form onSubmit={handleSearch}>
            <Form.Control type="text" placeholder="Buscar" onChange={(e) => handleChange(e)} />
            <Form.Control type="submit" />
          </Form>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          items.length !== 0 ? (
            <ItemList items={items} />

          ) : (
            <h2>No se encontraron resultados</h2>
          )
        )}
      </Row>
    </Container>
  );
}