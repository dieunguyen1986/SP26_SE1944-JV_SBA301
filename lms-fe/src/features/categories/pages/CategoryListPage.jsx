import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import categoryService from "../services/category.service";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const responseData = await categoryService.getCategories();
        console.log(responseData);

        setCategories(responseData);

        console.log("Categories: " + categories);
      } catch (error) {
        console.log(error.message || "Have an error....");
      }
    };

    getAllCategories();
  }, []);

  // Call API

  // UI
  return (
    <Col md={10} xl={10} className="mt-5 px-5">
      <div className="d-flex justify-content-between">
        <h3>Category List</h3>

        <Button variant="info" className="rounded-2" style={{ width: "120px" }}>
          Create New
        </Button>
      </div>

      <hr />

      <Table striped bordered hover size="sm" className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Sort Order</th>
            <th>Active?</th>
            <th>Update At</th>
          </tr>
        </thead>
        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <Alert variant="warning" className="mb-0">
                  No categories found.
                </Alert>
              </td>
            </tr>
          ) : (
            categories.map((c) => 
              <tr key={c.id}>
                <td>{c.categoryName}</td>
                <td>{c.description}</td>
                <td>{c.sortOrder}</td>
                <td>{c.isActive}</td>
                <td>{c.updateAt}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Col>
  );
};

export default CategoryListPage;
