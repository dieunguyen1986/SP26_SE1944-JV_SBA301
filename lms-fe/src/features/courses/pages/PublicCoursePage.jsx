import React, { useState } from "react";
import PublicCourseList from "../components/PublicCourseList";
import { Container } from "react-bootstrap";

const PublicCoursePage = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <Container>
      <div className="row">
        <button
          className="btn btn-warning"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          Show/Hide
        </button>
      </div>

      {isShow && <PublicCourseList />}

      <div style={{ display: isShow ? "block" : "none" }}>
        <PublicCourseList />
      </div>
    </Container>
  );
};

export default PublicCoursePage;
