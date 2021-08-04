import React, {useState} from "react";
import {Container, Card, Form, Button, Row} from "react-bootstrap";
//Helper-функция отправки данных на сервер
import sendData from "./helpers/sendData";
const Authentification = () => {
  //Переключатель между авторизацией и регистрацией
  const [logReg, setLogReg] = useState(true);
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');

  return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight}}>
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">
              {logReg ? 'Авторизация': 
              'Регистрация'}
            </h2>
            <Form onSubmit={(event) => {sendData(event, email, password, setError, name, logReg)}}>
            {logReg ? <>
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш email..."
              value = {email}
              onChange = {(event) => setEmail(event.target.value)}
              onFocus = {() => setError('')}
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш password..."
              type = "password"
              value = {password}
              onChange = {(event) => setPassword(event.target.value)}
              onFocus = {() => setError('')}
              /> </>
              : <>
              <Form.Control 
              className="mt-3"
              placeholder="Введите вашe имя..."
              value = {name}
              onChange = {(event) => setName(event.target.value)}
              onFocus = {() => setError('')}
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш email..."
              value = {email}
              onChange = {(event) => setEmail(event.target.value)}
              onFocus = {() => setError('')}
              />
              <Form.Control 
              className="mt-3"
              placeholder="Введите ваш password..."
              type = "password"
              value = {password}
              onChange = {(event) => setPassword(event.target.value)}
              onFocus = {() => setError('')}
              /></>
            }

              <Row className="d-flex justify-content-between pl-3 pr-3">
                  <div className="mt-3" onClick={()=>{setLogReg(prev => !prev)}}>
                    {logReg ? 
                    'Зарегистрироваться'
                    : 'Авторизоваться'}
                  </div>
                    {logReg? 
                  <Button className="mt-3"
                  type = "submit" 
                  variant={"outline-success"}>
                    Войти 
                  </Button>
                    : 
                  <Button className="mt-3" 
                  type = "submit" 
                  variant={"outline-success"}>
                    Регистрация
                  </Button>
                  }
              </Row>
            </Form>
            <div style={{lineHeight: "1rem", height: "1rem"}}>{error}</div>
          </Card>
    </Container>
  )
};

export default Authentification;
