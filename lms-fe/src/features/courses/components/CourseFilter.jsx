import { formatVND } from "@/shared/utils/formatters";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";
import { FunnelFill, StarFill, XCircle } from "react-bootstrap-icons";
import categoryService from "../../categories/services/category.service";

const levels = [
  { key: "all", label: "All levels" },
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "expert", label: "Expert" },
];

const CourseFilter = () => {
  // ===== Local UI state (demo) =====
  const [categories, setCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState(["all"]);

  // Call API to get categories for filter
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseData = await categoryService.getCategories();

        console.log("Fetched categories:", responseData);

        setCategories(responseData);

      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Logic for level filter: single or multi select
  const toggleLevel = (key) => {
    setSelectedLevels((prev) => {
      // nếu chọn "all" -> chỉ giữ all
      if (key === "all") return ["all"];

      // nếu đang có "all" mà chọn key khác -> bỏ all
      const base = prev.includes("all") ? [] : [...prev];

      if (base.includes(key)) {
        const next = base.filter((x) => x !== key);
        return next.length ? next : ["all"]; // nếu bỏ hết -> quay về all
      }
      return [...base, key];
    });
  };

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white border-0 pb-0">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <FunnelFill className="text-primary" />
            <div className="fw-bold">Bộ lọc</div>
          </div>

          <Button
            variant="link"
            className="p-0 text-decoration-none text-muted"
          >
            <span className="d-inline-flex align-items-center gap-1">
              <XCircle /> Clear
            </span>
          </Button>
        </div>
      </Card.Header>

      <Card.Body className="pt-3">
        {/* Categories */}
        <div className="mb-4">
          <div className="fw-semibold mb-2">Categories</div>
          <Form.Select className="py-2">
            {categories.map((c) => (
              <option key={c.id} value={c.categoryName}>
                {c.categoryName}
              </option>
            ))}
          </Form.Select>
        </div>
        {/* Ratings */}
        <div className="mb-5">
          <div className="fw-semibold mb-2">Ratings</div>
          <Stack className="mb-3">
            <Form.Check
              style={{ width: "15px", fontSize: "13px" }}
              type="radio"
              label={
                <div className="d-flex gap-2" style={{ width: "250px" }}>
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" /> <StarFill />
                  <span> 4.0 & up () </span>
                </div>
              }
            ></Form.Check>
            <Form.Check
              style={{ width: "15px", fontSize: "13px" }}
              type="radio"
              label={
                <div className="d-flex gap-2" style={{ width: "250px" }}>
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" /> <StarFill />
                  <StarFill /> <span> 3.0 & up () </span>
                </div>
              }
            ></Form.Check>
            <Form.Check
              style={{ width: "15px", fontSize: "13px" }}
              type="radio"
              label={
                <div className="d-flex gap-2" style={{ width: "250px" }}>
                  <StarFill className="text-warning" />
                  <StarFill className="text-warning" /> <StarFill />
                  <StarFill /> <StarFill /> <span> 2.0 & up () </span>
                </div>
              }
            ></Form.Check>
            <Form.Check
              style={{ width: "35px", fontSize: "13px" }}
              type="radio"
              label={
                <div className="d-flex gap-2" style={{ width: "250px" }}>
                  <StarFill className="text-warning" /> <StarFill />
                  <StarFill /> <StarFill /> <StarFill />
                  <div> 1.0 & up () </div>
                </div>
              }
            ></Form.Check>
          </Stack>
        </div>
        {/* Levels */}
        <div className="mb-5">
          <div className="fw-semibold mb-2">Levels</div>
          <Stack gap={2}>
            {levels.map((lv) => (
              <Form.Check
                key={lv.key}
                type="checkbox"
                id={`level-${lv.key}`}
                checked={selectedLevels.includes(lv.key)}
                onChange={() => toggleLevel(lv.key)}
                label={<span className="text-muted">{lv.label}</span>}
              />
            ))}
          </Stack>

          <div className="text-muted small mt-2">
            Tip: chọn All levels hoặc chọn nhiều level.
          </div>
        </div>
        {/* Prices */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="fw-semibold">Price</div>
          </div>
          <div className="d-flex">
            <span>{formatVND(0)}</span> <Form.Label></Form.Label> <Form.Range />
            <span>{formatVND(10000000)} </span>
          </div>
        </div>

        <div className="d-grid">
          <Button variant="primary" size="lg">
            Apply
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseFilter;
