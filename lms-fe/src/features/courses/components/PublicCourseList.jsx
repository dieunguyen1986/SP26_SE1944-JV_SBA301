import React, { useState } from "react";
import CourseCard from "../../../shared/components/CourseCard";

const PublicCourseList = () => {
  // Logic

  // State
  const [courses, setCourses] = useState([
    {
      courseId: "C01",
      title: "Java SE",
      studentNumber: 0,
      price: 100,
      img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    },
    {
      courseId: "C02",
      title: "SQL",
      studentNumber: 1,
      price: 100,
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    {
      courseId: "C03",
      title: "Learn Korean",
      studentNumber: 0,
      price: 10,
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    {
      courseId: "C04",
      title: "Python",
      studentNumber: 0,
      price: 100,
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    {
      courseId: "C05",
      title: "Gen AI",
      studentNumber: 0,
      price: 100,
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const [courseResult, setCourseResult] = useState(courses);

  // Functions

  // Call API
  const search = (searchValue) => {
    if (searchValue) {
      const result = courses.filter((c) => c.title.includes(searchValue));

      setCourseResult(result);
    } else {
      console.log(courses);
      setCourseResult(courses);
    }
    // console.log(courseResult);
  };

  const enrollCourse = (id) => {
    console.log("You are selected: " + id);
    const result = courses.map((c) => {
      if (c.courseId === id)
        return { ...c, studentNumber: c.studentNumber + 1 };
      return c;
    });

    setCourses(result);
    setCourseResult(result);
  };

  // Behavious
  return (
    <section>
      <div className="container">
        <div className="justify-content-center align-items-center mt-2 ms-3 me-3">
          <div className="d-flex justify-content-between">
            <h2 className="">Course List</h2>
          </div>

          <label htmlFor="keyword" className="form-label">
            Enter your text
          </label>
          <div className="d-flex gap-2">
            <input
              className="form-control"
              id="keyword"
              placeholder="Type to search..."
              value={keyword}
              onChange={(e) => {
                const searchValue = e.target.value;
                setKeyword(searchValue);
                search(searchValue);
              }}
            />
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                search();
              }}
            >
              Search
            </button>
          </div>
          <hr />
        </div>
        <div className="container-fluid">
          <div className="row">
            {!courseResult || courseResult.length === 0 ? (
              <p>No record!</p>
            ) : (
              courseResult.map((c) => (
                <div
                  key={c.courseId}
                  className="col-md-4 col-xl-3 col-lg-2 mb-3"
                >
                  <CourseCard course={c} enrollCourse={enrollCourse} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicCourseList;
