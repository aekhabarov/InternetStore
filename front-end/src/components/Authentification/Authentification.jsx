import React from "react";
import {Container, Card, Form, Button, Row} from "react-bootstrap";

const Authentification = () => {

  return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight}}>
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Авторизация</h2>
            <Form>
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш email..."
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш password..."
              />
              <Row className="d-flex justify-content-between pl-3 pr-3">
                  <div className="mt-3">
                    Зарегистрироваться</div>
                  <Button className="mt-3" variant={"outline-success"}>Войти</Button>
              </Row>
            </Form>
          </Card>
    </Container>
  )
};

export default Authentification;
