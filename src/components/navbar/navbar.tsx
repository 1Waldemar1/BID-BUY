import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { render } from "react-dom";
import {
  faCartPlus,
  faHome,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Button variant="outline-primary">Категория товаров</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Поиск по товарам"
              className="me-2"
              aria-label="Search"
            />
            <Nav.Link href="#action1">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <FontAwesomeIcon icon={faUser} />
              <span>Войти</span>
            </Nav.Link>
            <Nav.Link href="#action2">
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Корзина</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

render(<NavBar />, document.getElementById("root"));
