import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import TypeBar from '../TypeBar/TypeBar';

function Shop() {
  return (
    <Container>
        <Row className={"mt-2"}>
          <Col md={3}> 
            <TypeBar/>
          </Col>
          <Col md={9}> 
          Buba
          </Col>
        </Row>
    </Container>
  )
}

export default Shop
