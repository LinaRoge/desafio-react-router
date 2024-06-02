import { Route, Routes } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
const App = () => {
  return (
    <div>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
export default App;
