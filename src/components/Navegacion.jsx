import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";

const Navegacion = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start">
        <FcHome size={20} />
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>

        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          <FcContacts size={20} /> Contacto
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
