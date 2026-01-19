import React from "react";
import { Badge, Button, Form } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const CourseFilter = () => {
  return (
   <>
    <Badge className="py-3 w-100 my-3">Filter</Badge>
            <h4 className="mt-4">Categories</h4>
            <Form style={{ fontSize: "10px !important" }}>
              <Form.Select size="lg" className="mt-3 py-2">
                <option>Category</option>
              </Form.Select>

              <h4 className="mt-5">Ratings</h4>
              <Form.Check
                className="mt-4"
                style={{ width: "15px", fontSize: "13px" }}
                type="radio"
                label={
                  <div className="d-flex gap-2" style={{ width: "250px" }}>
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill />
                    <span> 4.0 & up () </span>
                  </div>
                }
              ></Form.Check>

              <Form.Check
                className="mt-4"
                style={{ width: "15px", fontSize: "13px" }}
                type="radio"
                label={
                  <div className="d-flex gap-2" style={{ width: "250px" }}>
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill />
                    <StarFill />
                    <span> 3.0 & up () </span>
                  </div>
                }
              ></Form.Check>

              <Form.Check
                className="mt-4"
                style={{ width: "15px", fontSize: "13px" }}
                type="radio"
                label={
                  <div className="d-flex gap-2" style={{ width: "250px" }}>
                    <StarFill className="text-warning" />
                    <StarFill className="text-warning" />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <span> 2.0 & up () </span>
                  </div>
                }
              ></Form.Check>

              <Form.Check
                className="mt-4"
                style={{ width: "35px", fontSize: "13px" }}
                type="radio"
                label={
                  <div className="d-flex gap-2" style={{ width: "250px" }}>
                    <StarFill className="text-warning" />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <div> 1.0 & up () </div>
                  </div>
                }
              ></Form.Check>

              <h4 className="mt-5">Levels</h4>

              <Form.Check
                className="mt-4"
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="All levels"
              ></Form.Check>

              <Form.Check
                className="mt-4"
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="Beginner"
              ></Form.Check>
              <Form.Check
                className="mt-4"
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="Intermediate"
              ></Form.Check>
              <Form.Check
                className="mt-4"
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="Expert"
              ></Form.Check>

              <h4 className="mt-5">Prices</h4>
              <div className="d-flex">
                <span>0 ($)</span>
                <Form.Label></Form.Label>
                <Form.Range />
                <span>10000 ($)</span>
              </div>
            </Form>

            <Button variant="info w-100 mt-3">Apply</Button>
   </>
  )
}

export default CourseFilter