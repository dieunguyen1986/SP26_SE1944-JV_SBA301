import CategoryListPage from "../../features/categories/pages/CategoryListPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const adminRoutes = [
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
        { index: true, element: <CategoryListPage /> },
        { path: "categories", element: <CategoryListPage /> }
    ],
  },
];

export default adminRoutes;
