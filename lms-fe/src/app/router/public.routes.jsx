import PublicLayout from "../layouts/PublicLayout";
import PublicHomePage from "../../features/public-site/pages/PublicHomePage";
import LoginPage from "../../features/auth/pages/LoginPage";
import NotFound from "../../shared/components/NotFound";
import PublicCoursePage from "../../features/courses/pages/PublicCoursePage";
import courseService from "../../features/courses/services/course.service";
import MainCourseList from "../../features/courses/components/MainCourseList";
import CourseDetail from "../../features/courses/pages/CourseDetail";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import Unauthorizarion from "../../features/auth/components/Unauthorizarion";

const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <PublicHomePage /> },
      {
        path: "public/courses",
        element: <PublicCoursePage />,
        children: [
          {
            index: true,
            element: <MainCourseList />,
            loader: courseService.findAll,
          },
          { path: ":id", element: <CourseDetail /> },
        ],
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorizarion />,
  },
  { path: "*", element: <NotFound /> },
];

export default publicRoutes;
