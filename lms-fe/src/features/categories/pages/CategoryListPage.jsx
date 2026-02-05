import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import categoryService from "../services/category.service";
import CategoryDetailModal from "../components/CategoryDetailModal";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [categoryUpdatable, setCategoryUpdatable] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // Get list of categories
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

  useEffect(() => {
    const getAll = () => {
      getAllCategories();
    };
    getAll();
  }, []);

  // Handling submit
  const handleSubmit = async (category) => {
    const payload = {
      ...category,
      sortOrder: Number(category.sortOrder),
      parentId: category.parentId ? Number(category.parentId) : 0,
    };

    console.log("Category: " + JSON.stringify(payload));

    try {
      const responseData = await categoryService.createCategory(payload);
      console.log("Message: " + responseData.message);

      setIsShowModal(false);

      getAllCategories();
    } catch (error) {
      console.error(error?.message || "Has an error be occurse! ");
      setIsShowModal(true);
    }
  };

  // Handling Edit
  const handleEdit = async (id) => {
    try {
      const responseData = await categoryService.findById(id);

      setCategoryUpdatable(responseData);
      setIsEdit(true);
    } catch (error) {
      console.log(error?.message || "Have an error...");
      setIsEdit(false);
    }
  };

  // UI
  return (
    <Col md={10} xl={10} className="mt-5 px-5">
      <div className="d-flex justify-content-between">
        <h3>Category List</h3>

        <Button
          onClick={() => {
            setIsShowModal(true);
          }}
          variant="info"
          className="rounded-2"
          style={{ width: "120px", color: "white" }}
        >
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
            <th>Action</th>
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
            categories.map((c, index) => (
              <tr key={c.id}>
                <td>{index + 1}</td>
                <td>{c.categoryName}</td>
                <td>{c.description}</td>
                <td>{c.sortOrder}</td>
                <td>{c.isActive}</td>
                <td>{c.updateAt}</td>
                <td>
                  <a
                    className="text-decoration-none"
                    onClick={() => {
                      handleEdit(c.id);
                      setIsShowModal(true);
                    }}
                    href="#"
                  >
                    {" "}
                    Edit{" "}
                  </a>{" "}
                  |
                  <a
                    className="text-decoration-none"
                    onClick={() => {
                      handleDelete(c.id);
                    }}
                  >
                    {" "}
                    Delete
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {isShowModal ? (
        <CategoryDetailModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          categories={categories}
          categoryUpdatable={categoryUpdatable}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        />
      ) : (
        ""
      )}
    </Col>
  );
};

export default CategoryListPage;
