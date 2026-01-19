import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "@/assets/logo.svg";
import "@/styles/header.css";
import {
  AuthActionsContext,
  AuthStateContext,
} from "../../app/providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import auth from "../../features/auth/services/auth.service";

const PublicHeader = () => {
  const { user } = useContext(AuthStateContext);
  const { logout } = useContext(AuthActionsContext);

  const navLinkCustom = ({isActive}) =>({
    borderBottom: isActive ? "2px solid #0dcaf0" : "none",
  });

  const handleSelect = async (eventKey) => {
    console.log("Selected: " + eventKey);

    if (eventKey === "signout") {
      logout();
    } else if (eventKey === "profile") {
      await auth.me();
    }
  };

  return (
    <Container>
      <Row className="justify-content-center py-4">
        <Col md={12}>
          <Row>
            <Col md={2} className="d-flex justify-content-start">
              <Image src={logo} style={{ width: "160px" }} />
            </Col>
            <Col
              md={7}
              className="d-flex align-items-center justify-content-center"
            >
              <Nav
                className="gap-2 justify-content-end"
                activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/" end className="custom-nav" style={navLinkCustom}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/courses" className="custom-nav" style={navLinkCustom}>
                    Courses
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>

                  <Nav.Link as={NavLink} to="/mentor" className="custom-nav" style={navLinkCustom}>
                    Mentor
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/group"  className="custom-nav" style={navLinkCustom}>
                    Group
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={NavLink} to="/testimonial" className="custom-nav" style={navLinkCustom}>
                    Testimonial
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/docs" className="custom-nav" style={navLinkCustom}>
                    Docs
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={3} className="d-flex justify-content-center">
              {user ? (
                <Nav
                  variant="pills"
                  activeKey="1"
                  onSelect={(eventKey) => {
                    handleSelect(eventKey);
                  }}
                >
                  <NavDropdown title={user.name} id="nav-dropdown">
                    <NavDropdown.Item eventKey="signout">
                      Sign Out
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="profile">
                      My Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <>
                  <Button
                    variant="info"
                    className="me-3"
                    style={{ width: "120px" }}
                  >
                    <Link
                      className="text-decoration-none text-light"
                      to="/login"
                    >
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="outline-primary" style={{ width: "120px" }}>
                    Sign Up
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PublicHeader;
