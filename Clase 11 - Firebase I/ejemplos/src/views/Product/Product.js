import React from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Header from "../../components/Header/Header"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
export default function Product () {
  const {productId} = useParams()
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <ItemDetailContainer title="Mi producto" productId={productId} />
          </Col>
        </Row>
      </Container>
    </>
  );
}