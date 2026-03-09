import React, { useContext, useMemo } from "react";
import { Col, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthStateContext } from "../../app/providers/AuthProvider";
import MenuItems from "./MenuItems";

const DashboardBar = () => {
  const { user } = useContext(AuthStateContext);

  const menus = MenuItems[user?.roles[0]] || [];
  
  // const location = useLocation();

  // // Determine active link based on role
  // const menus = useMemo(() => {
  //   if (!user || !user?.roles) return [];

  //   return user.roles.flatMap((role) => {
  //     return MenuItems[role] || [];
  //   });
  // }, [user]);

  /*
  MenuItems = {
    ROLE_ADMIN: [
      { label: "Dashboard" },
      { label: "Categories" }
    ],
    ROLE_INSTRUCTOR: [
      { label: "My Courses" },
      { label: "Students" }
    ]
  --> roles.map(role => MenuItems[role])
  [
    [
      { label: "Dashboard" },
      { label: "Categories" }
    ],[
      { label: "My Courses" },
      { label: "Students" }
  ]
  --> flat() --> [
    { label: "Dashboard" },
    { label: "Categories" },
    { label: "My Courses" },
    { label: "Students" }
  ]  
  }
  */

  return (
    <Col md={2} xl={2} className="shadow-sm fs-6 vh-100">
      <Nav className="flex-column">
        {menus.map((item, index) => (
          <Nav.Item
            key={index}
            className="w-100 py-3 d-flex align-items-center"
          >
            <span className="ms-4">{item.icon}</span>
            <Nav.Link
              as={Link}
              to={item.to}
              className={`ms-2 ${
                location.pathname === item.to
                  ? "fw-bold text-primary"
                  : "text-secondary"
              }`}
            >
              {item.label}

              {item.badge && (
                <span className="ms-2 badge bg-secondary">{item.badge}</span>
              )}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default DashboardBar;
