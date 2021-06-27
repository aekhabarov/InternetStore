import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
} from "./utils/consts";
import Authentification from "./components/Authentification/Authentification";
import Admin from "./components/Admin/Admin";
import Basket from "./components/Basket/Basket";
import Device from "./components/Device/Device";
import Shop from "./components/Shop/Shop";

//Роуты на которые может зайти только зарегистрированный пользователь
export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

//Публичные роуты
export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Authentification,
  },
  {
    path: LOGIN_ROUTE,
    Component: Authentification,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];
