import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseFilter from "./CourseFilter";
import PublicCourseList from "./PublicCourseList";
import { useLoaderData } from "react-router-dom";

const MainCourseList = () => {

  // Declare states
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // Get data from loader in route: loader: courseService.findAll,
  const courseResponse = useLoaderData();

  
  useEffect(() => {
    setCourses(courseResponse.courses);
    setTotalPages(courseResponse.totalPages);
  }, [courseResponse]);

  return (
    <section className="bg-white">
      <Container className="mt-5 py-2">
        <Row>
          <Col md={3} xl={3} className="bg-light rounded-3 p-4">
            <CourseFilter />
          </Col>

          <Col md={9} xl={9} className="bg-light rounded-3 py-5">
            <PublicCourseList
              courses={courses}
              totalPages={totalPages}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainCourseList;
