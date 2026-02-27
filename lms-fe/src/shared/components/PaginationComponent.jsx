import React from "react";
import { NavLink, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginationComponent = ({ totalPages, currentPage, setCurrentPage }) => {
  // totalPages = 2
  let active = currentPage; // active = 1
  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setCurrentPage(number);

          console.log("Current page: " + number);
        }}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationComponent;
