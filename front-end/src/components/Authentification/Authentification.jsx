import React from "react";
import {Container, Card, Form, Button, Row} from "react-bootstrap";

const Authentification = () => {
  const isLogin = true;
  return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight}}>
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">
              {isLogin ? 'Авторизация': 
              'Регистрация'}
            </h2>
            <Form>
            {isLogin ? <>
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш email..."
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш password..."
              /> </>
              : <>
              <Form.Control 
              className="mt-3"
              placeholder="Введите вашe имя..."
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш email..."
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш password..."
              /></>
            }

              <Row className="d-flex justify-content-between pl-3 pr-3">
                  <div className="mt-3">
                    {isLogin ? 
                    'Зарегистрироваться'
                    : 'Авторизоваться'}
                  </div>
                    {isLogin? 
                  <Button className="mt-3" variant={"outline-success"}>
                    Войти 
                  </Button>
                    : 
                  <Button className="mt-3" variant={"outline-success"}>
                    Регистрация
                  </Button>
                  }
              </Row>
            </Form>
          </Card>
    </Container>
  )
};

export default Authentification;
