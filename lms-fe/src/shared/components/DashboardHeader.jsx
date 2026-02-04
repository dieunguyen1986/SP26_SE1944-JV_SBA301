import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "@/assets/logo.svg";
import { Bell, BellFill, BellSlash, Envelope } from "react-bootstrap-icons";
import { BsSearch } from "react-icons/bs";

const DashboardHeader = () => {
  const [amountMess, setAmountMess] = useState(0);
  const [newEmail, setNewEmail] = useState(0);

  return (
    <section>
      <Row className="border-bottom shadow-sm" style={{ height: "70px" }}>
        <Col md={2} xl={2} className="d-flex justify-content-center border-end">
          <Image src={logo} style={{ width: "50%" }} />
        </Col>
        <Col md={7} xl={8} className="d-flex align-items-center">
          <Form>
            <Form.Group className="my-3 d-flex" controlId="formBasicEmail">
              <Form.Control
                type="search"
                className="rounded-5"
                style={{ fontSize: "13px", width: "300px" }}
                placeholder="Search..."
              />
              <BsSearch
                className="position-absolute text-muted"
                style={{
                  right: "1300px",
                  top: "33px",
                  transform: "translateY(-50%)",
                  pointerEvents: "none", // để click vào input
                }}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col
          md={3}
          xl={2}
          className="d-flex justify-content-center align-items-center gap-4"
        >
          <Envelope values={newEmail} />
          <Bell values={amountMess} />

          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </section>
  );
};

export default DashboardHeader;
