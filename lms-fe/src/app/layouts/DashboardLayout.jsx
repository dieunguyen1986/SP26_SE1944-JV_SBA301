import React from "react";
import { Outlet } from "react-router-dom";
import {Row} from 'react-bootstrap'
import DashboardHeader from "../../shared/components/DashboardHeader";
import DashboardBar from "../../shared/components/DashboardBar";
import CategoryListPage from "../../features/categories/pages/CategoryListPage";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Row>
        <DashboardBar />
        <Outlet />
      </Row>
    </>
  );
};

export default DashboardLayout;
