import React, { useEffect, useState } from "react";
import {Button, Form, Modal } from "react-bootstrap";

const CategoryDetailModal = ({
  isShowModal,
  setIsShowModal,
  categories,
  handleSubmit,
  categoryUpdatable,
  isEdit
}) => {
  // Logic
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    sortOrder: 1,
    description: "",
    isActive: true,
    parentId: 0,

  });

  // UI

  useEffect(() => {
    console.log("categoryUpdatable: " + categoryUpdatable);

    const setUpdateData = async () => {
      setCategory({
        id: categoryUpdatable?.id,
        categoryName: categoryUpdatable.categoryName,
        sortOrder: categoryUpdatable.sortOrder,
        description: categoryUpdatable.description,
        isActive: categoryUpdatable.isActive,
        parentId: categoryUpdatable.parentId,
      });
    };

    setUpdateData();

  }, [isEdit]);

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    console.log("Cate: " + JSON.stringify(category));
    handleSubmit(category);
  };

  return (
    <Modal
      size="lg"
      show={isShowModal}
      onHide={() => setIsShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Category Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitCategory}>
          <Form.Group className="mb-3" controlId="id">
            <Form.Control type="hidden" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoryName">
            <Form.Label>Category Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category Name"
              name="categoryName"
              value={category.categoryName}
              onChange={(e) => {
                setCategory({ ...category, categoryName: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={category.description}
              onChange={(e) => {
                setCategory({ ...category, description: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="parent">
            <Form.Label>Parent</Form.Label>
            <Form.Select
              aria-label="parent"
              name="parentId"
              onChange={(e) => {
                setCategory({
                  ...category,
                  parentId: e.target.value,
                });
              }}
            >
              <option value="0">-- Select a Parent --</option>
              {!categories
                ? ""
                : categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.categoryName}
                    </option>
                  ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="sortOrder">
            <Form.Label>Sort Order:</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              name="sortOrder"
              value={category.sortOrder}
              onChange={(e) => {
                setCategory({ ...category, sortOrder: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="active">
            <Form.Check
              type="checkbox"
              checked={category.isActive}
              label="Active"
              name="isActive"
              onChange={(e) => {
                setCategory({ ...category, isActive: e.target.checked });
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-3">
            <Button
              variant="secondary"
              className="rounded-3"
              style={{ width: "120px" }}
              onClick={() => {
                setIsShowModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="info"
              className="rounded-3"
              style={{ width: "150px", color: "white" }}
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryDetailModal;
