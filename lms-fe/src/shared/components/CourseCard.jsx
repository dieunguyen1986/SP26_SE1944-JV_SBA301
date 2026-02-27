import { Link } from "react-router-dom";
import { checkPrice } from "../utils/checkPrice";
import { useEffect, useState } from "react";

const CourseCard = ({ course, enrollCourse }) => {
  // Declare states
  const [price, setPrice] = useState(null);

  // Demo Promise in JS: use then catch
  // const price = checkPrice(course)
  //   .then((price) => price)
  //   .catch((error) => error);

  // Demo Promise in JS: use async await
  useEffect(() => {
    const asyncPrice = async () => {
      try {
        const res = await checkPrice(course);
        setPrice(res);
      } catch (free) {
        setPrice(free);
      }
    };

    asyncPrice();
  }, [course]);

  // Logic

  // Behavious
  return (
    <>
      <div className="card" style={{ width: "95%", height: "100%" }}>
        <div className="d-flex justify-content-center mt-2">
          <img
            src={course.thumbnailUrl}
            style={{ width: "90%", height: "250px" }}
            className="card-img-top"
          />
        </div>
        <div className="card-body gap-2 d-flex flex-column justify-content-between">
          <Link
            to={`/courses/${course.courseId}`}
            className="text-decoration-none"
          >
            <h5 className="card-title">{course.title}</h5>
          </Link>
          <div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div>
            <label className="fw-bold">Price:</label> {price} ($)
          </div>
          <div>
            <label className="card-text fw-bold">Student Number: </label>{" "}
            {course.students}
          </div>

          <div className="my-2">
            <a
              href="#"
              className="btn btn-info w-100 text-white"
              onClick={() => {
                enrollCourse(course.courseId);
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
