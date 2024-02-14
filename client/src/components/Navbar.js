import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navbarch = ({ fnct }) => {
  const [firstsearch, setfirstsearch] = useState("");
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#" className="logo">
              Elyes<span style={{ color: "red" }}>shop</span>shoes
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/homme">
                {" "}
                <Nav.Link href="#action1">Homme</Nav.Link>
              </Link>
              <Link to="/femme">
                <Nav.Link href="#action2">Femme</Nav.Link>
              </Link>
              <NavDropdown title="Promos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <Link to="/promos">
                  {" "}
                  <NavDropdown.Item href="#action4">
                    Promos Homme
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/promos">
                  {" "}
                  <NavDropdown.Item href="#action5">
                    Promos Femme
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <Link to='/login'><button>login</button></Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setfirstsearch(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => fnct(firstsearch)}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarch;
