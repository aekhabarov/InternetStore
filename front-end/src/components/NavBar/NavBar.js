import React, { useContext } from "react";
import { Context } from "../..";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <NavLink style={{ color: "whitesmoke" }} to={SHOP_ROUTE}>
        InetStore
      </NavLink>
      {user.isAuth ? (
        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
          <Button variant="outline-secondary mr-3">Админ панель</Button>
          <Button
            variant="outline-secondary"
            onClick={() => user.setIsAuth(false)}
          >
            Выйти
          </Button>
        </Nav>
      ) : (
        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
          <NavLink to={REGISTRATION_ROUTE}>
            <Button
              variant="outline-secondary"
              // onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </NavLink>
        </Nav>
      )}
    </Navbar>
  );
});

export default NavBar;
