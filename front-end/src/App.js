import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";

import Authentification from "./components/Authentification/Authentification";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
