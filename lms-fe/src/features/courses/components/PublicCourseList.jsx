import React, { useEffect, useState } from "react";
import CourseCard from "../../../shared/components/CourseCard";
import PaginationComponent from "../../../shared/components/PaginationComponent";
import courseService from "../services/course.service";

const PublicCourseList = ({
  courses,
  totalPages,
}) => {

  // Declare states
  const [courseResult, setCourseResult] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);

  // Functions
  useEffect(() => {
    setCourseResult(courses);
  }, [courses]);


  useEffect(() => {
    const fetchCourses = async () => {
      // Call API to get courses by page
      const res = await courseService.findAll({ page: currentPage });

      // Update courseResult with new data from API
      setCourseResult(res.courses);
    };

    fetchCourses();
  }, [currentPage]);

  const search = (searchValue) => {
    if (searchValue) {
      const result = courses.filter((c) =>
        c.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setCourseResult(result);
    } else {
      setCourseResult(courses);
    }
  };

  const enrollCourse = (id) => {
    console.log("You are selected: " + id);
    const result = courseResult.map((c) => {
      if (c.courseId === id)
        return { ...c, studentNumber: c.studentNumber + 1 };
      return c;
    });

    setCourseResult(result);
  };

  // Behavious
  return (
    <section>
      <div className="row">
        {!courseResult || courseResult.length === 0 ? (
          <p>No record!</p>
        ) : (
          courseResult.map((c) => (
            <div key={c.courseId} className="col-md-4 col-xl-4 col-lg-4 mb-3">
              <CourseCard course={c} enrollCourse={enrollCourse} />
            </div>
          ))
        )}
      </div>

      <div className="d-flex justify-content-center py-3">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default PublicCourseList;
