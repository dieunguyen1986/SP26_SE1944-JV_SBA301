import React from "react";
import PublicHeader from "../../shared/components/PublicHeader";
import { Outlet } from "react-router-dom";
import PublicFooter from "../../shared/components/PublicFooter";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>

      <PublicFooter />
    </>
  );
};

export default PublicLayout;
