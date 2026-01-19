import React from "react";

import PublicLayout from "../layouts/PublicLayout";
import PublicHomePage from "../../features/public-site/pages/PublicHomePage";
import PublicCourseList from "../../features/courses/components/PublicCourseList";
import LoginPage from "../../features/auth/pages/LoginPage";
import NotFound from "../../shared/components/NotFound";

const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  // {path: "/register", element: <RegisterPage />},
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <PublicHomePage /> },
      { path: "courses", element: <PublicCourseList />,
        // loader: // 

       },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default publicRoutes;
