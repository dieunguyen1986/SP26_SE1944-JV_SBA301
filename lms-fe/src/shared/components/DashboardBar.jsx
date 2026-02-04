import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Book } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCalendarWeek,
  FaUserCircle,
} from "react-icons/fa";

const DashboardBar = () => {
  return (
    <Col md={2} xl={2} className="shadow-sm fs-6" style={{ height: "100vh" }}>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item className="w-100 py-3 d-flex align-items-center">
          <FaCalendarWeek className="mt-1 ms-4" />
          <Nav.Link href="/home" style={{ color: "gray" }}>
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100 py-3 d-flex align-items-center">
          <FaCalendarWeek className="mt-1 ms-4" />
          <Nav.Link as={Link} to="/admin">
            Category Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100 py-3 d-flex align-items-center">
          <Book className="mt-1 ms-4" />
          <Nav.Link eventKey="link-1" style={{ color: "gray" }}>
            Course Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100 py-3 d-flex align-items-center">
          <FaUserCircle className="mt-1 ms-4" />
          <Nav.Link eventKey="link-2" style={{ color: "gray" }}>
            Instructors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100 py-3 border-top">
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default DashboardBar;
