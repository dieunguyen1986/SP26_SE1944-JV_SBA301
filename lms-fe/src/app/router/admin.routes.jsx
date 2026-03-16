import CategoryListPage from "../../features/categories/pages/CategoryListPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const adminRoutes = [
  {
    // Protected route for admin dashboard
    path: "/admin",
    element: [
      <ProtectedRoute roles={["ROLE_ADMIN"]}>
        <DashboardLayout />
      </ProtectedRoute>,
    ],
    
    children: [
      { index: true, element: <CategoryListPage /> },
      { path: "categories", element: <CategoryListPage /> },
    ],
  },
];

export default adminRoutes;
