import React from "react";
import { Container } from "react-bootstrap";
import PublicHeader from "../../../shared/components/PublicHeader";
import unauthorization from "@/assets/401-Unauthorization.png";

const Unauthorizarion = () => {
  return (
    <Container className="">
      <PublicHeader />

      <h1 className="text-center mt-5">
        Unauthorized - You do not have permission to access this page.
      </h1>
      <img
        src={unauthorization}
        alt="Unauthorized"
        className="img-fluid mx-auto d-block mt-4 "
        // style={{ maxWidth: "400px" }}
      />
    </Container>
  );
};

export default Unauthorizarion;
