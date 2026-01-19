import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PublicCoursePage from "./features/courses/pages/PublicCoursePage";
import InstructorCourseList from "./features/instructors/InstructorCourseList";
import PublicHomePage from "./features/public-site/pages/PublicHomePage";
import App from "./app/App";
import AuthProvider from "./app/providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* <PublicHomePage /> */}

    {/* Instructor role */}
    {/* <InstructorCourseList /> */}
  </StrictMode>,
);
