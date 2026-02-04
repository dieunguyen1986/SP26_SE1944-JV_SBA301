import CategoryListPage from "../../features/categories/pages/CategoryListPage";
import DashboardLayout from "../layouts/DashboardLayout";

const adminRoutes = [
    {path: "/admin", element: <DashboardLayout />, children: [
        {index: true, element: <CategoryListPage />}
    ]}

];

export default adminRoutes;